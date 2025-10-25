"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, MapPin, Phone, Star } from "lucide-react"
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api"

// Map container style
const containerStyle = {
  width: "100%",
  height: "600px",
}

const defaultCenter = {
  lat: 5.6037, // Accra, Ghana default
  lng: -0.1870,
}

export default function DirectionsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [directions, setDirections] = useState<any>(null)
  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [error, setError] = useState<string>("")

  // Get pharmacy data from URL params
  const pharmacyName = searchParams.get("name") || "Pharmacy"
  const address = searchParams.get("address") || ""
  const phone = searchParams.get("phone") || ""
  const rating = searchParams.get("rating") || ""
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  useEffect(() => {
    // Set map center if coordinates are provided
    if (lat && lng) {
      setMapCenter({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      })
    }

    // Get user's current location for directions
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          // If we have pharmacy coordinates, get directions
          if (lat && lng) {
            await fetchDirections(userLocation, {
              lat: parseFloat(lat),
              lng: parseFloat(lng),
            })
          }
        },
        (error) => {
          console.log("Error getting location:", error)
          setError("Could not get your location. Please enable location services.")
        }
      )
    }
  }, [lat, lng])

  const fetchDirections = async (origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) => {
    try {
      const directionsService = new window.google.maps.DirectionsService()
      
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK && result) {
            setDirections(result)
          } else {
            console.error("Directions request failed:", status)
          }
        }
      )
    } catch (err) {
      console.error("Error fetching directions:", err)
    }
  }

  const handleCall = (phoneNumber: string) => {
    const cleanedPhone = phoneNumber.replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanedPhone}`
  }

  const handleOpenExternalMaps = () => {
    const encodedAddress = encodeURIComponent(`${pharmacyName}, ${address}`)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Search</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pharmacy Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-black mb-4">{pharmacyName}</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">{address || "Address not available"}</p>
                </div>
              </div>

              {phone && (
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <button
                      onClick={() => handleCall(phone)}
                      className="text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      {phone}
                    </button>
                  </div>
                </div>
              )}

              {rating && (
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <div>
                    <p className="font-medium text-gray-900">Rating</p>
                    <p className="text-gray-600">{rating} / 5.0</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleOpenExternalMaps}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Open in Google Maps
              </button>
              {phone && (
                <button
                  onClick={() => handleCall(phone)}
                  className="w-full px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Call Pharmacy
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            onError={() => setError("Failed to load Google Maps. Please check your API key.")}
          >
            <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={15}>
              {lat && lng && (
                <Marker
                  position={{
                    lat: parseFloat(lat),
                    lng: parseFloat(lng),
                  }}
                  title={pharmacyName}
                />
              )}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </LoadScript>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Instructions */}
        {directions && directions.routes[0] && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-black mb-4">Directions</h2>
            <div className="space-y-2">
              {directions.routes[0].legs[0].steps.map((step: any, index: number) => (
                <div key={index} className="flex gap-3 p-3 hover:bg-gray-50 rounded">
                  <span className="font-medium text-indigo-600 min-w-[30px]">{index + 1}.</span>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: step.instructions }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 