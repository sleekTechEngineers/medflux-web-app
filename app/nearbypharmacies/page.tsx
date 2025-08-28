"use client"

import React, { useState } from "react"
import { Search, MapPin, Star, Phone, Clock, Truck, Shield, Pill, Filter } from "lucide-react"

// TypeScript interfaces
interface Pharmacy {
  id: string
  name: string
  address: string
  phone: string
  email?: string
  latitude?: number
  longitude?: number
  rating?: number
  delivery_available?: boolean
  operating_hours?: string
  is_verified?: boolean
  distance?: string
}

interface Medicine {
  id: string
  name: string
  generic_name?: string
  dosage: string
  price: number
  description?: string
  category?: string
  manufacturer?: string
}

interface PharmacyMedicine {
  pharmacy: Pharmacy
  medicine: Medicine
  in_stock: boolean
  quantity_available?: number
  last_updated?: string
}

export default function MedicationFinder() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<PharmacyMedicine[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Mock data for demonstration
  const mockPharmacies: Pharmacy[] = [
    {
      id: "1",
      name: "HealthPlus Pharmacy",
      address: "123 Main Street, Downtown",
      phone: "+1 (555) 123-4567",
      email: "info@healthplus.com",
      rating: 4.8,
      delivery_available: true,
      operating_hours: "8:00 AM - 10:00 PM",
      is_verified: true,
      distance: "0.5 miles",
    },
    {
      id: "2",
      name: "MediCare Central",
      address: "456 Oak Avenue, City Center",
      phone: "+1 (555) 987-6543",
      email: "contact@medicare.com",
      rating: 4.6,
      delivery_available: true,
      operating_hours: "24/7",
      is_verified: true,
      distance: "1.2 miles",
    },
    {
      id: "3",
      name: "QuickMeds Express",
      address: "789 Pine Road, Westside",
      phone: "+1 (555) 456-7890",
      rating: 4.4,
      delivery_available: false,
      operating_hours: "9:00 AM - 9:00 PM",
      is_verified: true,
      distance: "2.1 miles",
    },
    {
      id: "4",
      name: "Family Pharmacy",
      address: "321 Elm Street, Northside",
      phone: "+1 (555) 234-5678",
      rating: 4.7,
      delivery_available: true,
      operating_hours: "7:00 AM - 11:00 PM",
      is_verified: false,
      distance: "1.8 miles",
    },
  ]

  const mockMedicines: Medicine[] = [
    {
      id: "1",
      name: "Paracetamol",
      generic_name: "Acetaminophen",
      dosage: "500mg",
      price: 12.99,
      category: "Pain Relief",
      manufacturer: "Generic Pharma",
      description: "Pain reliever and fever reducer",
    },
    {
      id: "2",
      name: "Ibuprofen",
      generic_name: "Ibuprofen",
      dosage: "400mg",
      price: 15.5,
      category: "Anti-inflammatory",
      manufacturer: "MediCorp",
      description: "Anti-inflammatory pain reliever",
    },
    {
      id: "3",
      name: "Amoxicillin",
      generic_name: "Amoxicillin",
      dosage: "250mg",
      price: 25.0,
      category: "Antibiotic",
      manufacturer: "BioPharm",
      description: "Antibiotic for bacterial infections",
    },
    {
      id: "4",
      name: "Vitamin D3",
      generic_name: "Cholecalciferol",
      dosage: "1000 IU",
      price: 18.75,
      category: "Supplements",
      manufacturer: "VitaHealth",
      description: "Vitamin D supplement",
    },
  ]

  const categories = [
    "all",
    "Pain Relief",
    "Anti-inflammatory",
    "Antibiotic",
    "Supplements",
    "Cardiovascular",
    "Digestive",
    "Allergy",
    "Diabetes",
  ]

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setHasSearched(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock search logic
    const results: PharmacyMedicine[] = []
    const matchingMedicines = mockMedicines.filter(
      (med) =>
        med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.generic_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.category?.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    matchingMedicines.forEach((medicine) => {
      mockPharmacies.forEach((pharmacy) => {
        // Randomly determine availability for demo
        const inStock = Math.random() > 0.3
        if (selectedCategory === "all" || medicine.category === selectedCategory) {
          results.push({
            pharmacy,
            medicine,
            in_stock: inStock,
            quantity_available: inStock ? Math.floor(Math.random() * 50) + 1 : 0,
            last_updated: new Date().toISOString(),
          })
        }
      })
    })

    setSearchResults(results)
    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-white my-10 mt-24">
      {/* Hero Section with Search */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Find Your Medications Quickly</h2>
          <p className="text-xl text-gray-600 mb-8">
            Search for medications and discover which nearby pharmacies have them in stock
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for medications (e.g., Paracetamol, Ibuprofen, Vitamin D)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Filter className="h-4 w-4 text-gray-500 mt-2 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-indigo-600 hover:text-indigo-600"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 text-gray-600">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                  Searching pharmacies...
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Search Results for "{searchQuery}"</h3>
                  <p className="text-gray-600">
                    Found {searchResults.length} results from {new Set(searchResults.map((r) => r.pharmacy.id)).size}{" "}
                    pharmacies
                  </p>
                </div>

                <div className="grid gap-6">
                  {searchResults.map((result, index) => (
                    <div
                      key={`${result.pharmacy.id}-${result.medicine.id}-${index}`}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Medication Info */}
                        <div className="md:col-span-1">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Pill className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-black text-lg">
                                {result.medicine.name} {result.medicine.dosage}
                              </h4>
                              {result.medicine.generic_name && (
                                <p className="text-sm text-gray-600">
                                  Generic: {result.medicine.generic_name}
                                </p>
                              )}
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                                {result.medicine.category}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-2xl font-bold text-black">${result.medicine.price}</p>
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  result.in_stock 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {result.in_stock ? "In Stock" : "Out of Stock"}
                              </span>
                              {result.in_stock && result.quantity_available && (
                                <span className="text-sm text-gray-600">
                                  {result.quantity_available} available
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Pharmacy Info */}
                        <div className="md:col-span-2">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="font-semibold text-black text-lg mb-1">{result.pharmacy.name}</h5>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{result.pharmacy.address}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span>{result.pharmacy.distance}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Phone className="h-4 w-4" />
                                  <span>{result.pharmacy.phone}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{result.pharmacy.operating_hours}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="font-medium text-black">{result.pharmacy.rating}</span>
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="flex gap-2 mb-4">
                            {result.pharmacy.is_verified && (
                              <span className="inline-flex items-center px-2 py-1 text-xs border border-indigo-600 text-indigo-600 rounded-full">
                                <Shield className="h-3 w-3 mr-1" />
                                Verified
                              </span>
                            )}
                            {result.pharmacy.delivery_available && (
                              <span className="inline-flex items-center px-2 py-1 text-xs border border-blue-500 text-blue-700 rounded-full">
                                <Truck className="h-3 w-3 mr-1" />
                                Delivery Available
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              Get Directions
                            </button>
                            <button
                              className={`flex-1 px-4 py-2 rounded-lg transition-colors flex items-center justify-center ${
                                result.in_stock
                                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                              }`}
                              disabled={!result.in_stock}
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              {result.in_stock ? "Call Pharmacy" : "Out of Stock"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">No medications found</h3>
                <p className="text-gray-600 mb-6">
                  Try searching with different keywords or check the spelling
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSearchResults([])
                    setHasSearched(false)
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}