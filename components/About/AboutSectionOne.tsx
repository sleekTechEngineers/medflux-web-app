import Image from "next/image"

const checkIcon = (
  <svg width="20" height="16" viewBox="0 0 20 16" className="fill-current">
    <path d="M7.5 12.5L2.5 7.5L4 6L7.5 9.5L16 1L17.5 2.5L7.5 12.5Z" />
  </svg>
)

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
        {checkIcon}
      </div>
      <p className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {text}
      </p>
    </div>
  )

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-blac "
    >
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 p-8 lg:p-12">
            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Healthcare Innovation</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
                  Revolutionizing Pharmacy Services
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Our system combines cutting-edge geolocation tools with reliable pharmacy services to bring
                  convenience and accessibility to healthcare.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-1 gap-2">
                  <List text="Locate nearby pharmacies instantly" />
                  <List text="Real-time medicine availability" />
                  <List text="Intuitive user interface" />
                  <List text="Reliable geolocation services" />
                  <List text="24/7 accessibility" />
                  <List text="Secure and private data" />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-700">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/lightm.jpg"
                      alt="Modern pharmacy geolocation interface showing nearby pharmacies"
                      fill
                      className="object-cover dark:hidden transition-transform duration-300 hover:scale-105"
                    />
                    <Image
                      src="/darkm.jpg"
                      alt="Dark mode pharmacy geolocation interface"
                      fill
                      className="object-cover hidden dark:block transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionOne
