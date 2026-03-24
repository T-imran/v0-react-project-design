import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"
import Image from "next/image"

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        <TopAppBar searchPlaceholder="Search records, appointments..." />
        
        <div className="max-w-7xl mx-auto p-6 lg:p-10 pb-24 md:pb-10">
          {/* Hero Header Section */}
          <div className="mb-12 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-2">
                  Account Hub
                </h2>
                <p className="text-on-surface-variant max-w-md">
                  Manage your curator profile and dedicated health records for your companions.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface-variant font-semibold hover:bg-surface-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">download</span> Export Data
                </button>
                <button className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/10 hover:scale-[0.98] transition-transform">
                  <span className="material-symbols-outlined text-sm">save</span> Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Bento Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Owner Profile (4 Cols) */}
            <section className="lg:col-span-4 space-y-8">
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-headline text-xl font-bold">Personal Identity</h3>
                  <button className="text-primary hover:bg-primary-container/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 block">
                      Full Name
                    </label>
                    <p className="text-lg font-medium text-on-surface border-b border-transparent group-hover:border-primary-container/20 pb-1 transition-all">
                      Alexandra Wright
                    </p>
                  </div>
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 block">
                      Location
                    </label>
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-primary-container text-sm">location_on</span>
                      <p className="text-lg font-medium">Brooklyn, New York</p>
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 block">
                      Email Address
                    </label>
                    <p className="text-on-surface">a.wright@editorialcare.com</p>
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t border-surface-container">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Preferences</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Emergency Alerts</span>
                      <div className="w-10 h-5 bg-primary-container rounded-full relative">
                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Weekly Digest</span>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Membership Card */}
              <div className="relative overflow-hidden bg-primary-container rounded-3xl p-8 text-white">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold mb-1">Platinum Care</h3>
                <p className="text-white/80 text-sm mb-6">Active since January 2023</p>
                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors">
                  Manage Subscription
                </button>
              </div>
            </section>

            {/* Right Column: Pet Records (8 Cols) */}
            <section className="lg:col-span-8 space-y-8">
              {/* Pet Navigation Tabs */}
              <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
                <button className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-full font-bold flex items-center gap-2 whitespace-nowrap border-2 border-secondary">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span> Oliver
                </button>
                <button className="px-6 py-3 bg-surface-container-low text-on-surface-variant rounded-full font-semibold flex items-center gap-2 whitespace-nowrap hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-xl">pets</span> Luna
                </button>
                <button className="px-4 py-3 text-primary font-bold flex items-center gap-2 border-2 border-dashed border-primary/30 rounded-full hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined">add_circle</span> New Pet
                </button>
              </div>

              {/* Pet Record Detailed View */}
              <div className="bg-surface-container-low rounded-[2rem] p-1 md:p-2">
                <div className="bg-surface-container-lowest rounded-[1.75rem] p-8 lg:p-10 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="relative group">
                      <Image
                        alt="Pet photo"
                        className="w-40 h-40 rounded-3xl object-cover shadow-xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZr1DCJ7xCwSS3q1jnwvfTVFTKtUDiepJ4M26bqgJAeQYnKxbOEoeYhovpaFTz0-tqNdhTedQ4wnMjix8Athi11xAf9xq5vch2ppWgyx0EBHxOKa_sL6mNhvlFDMMac9lvJIGboo2n3Oy42reZ0GRRlIYtYnILQjf85JVaqL0thYaUf5_rnIyw1QanAJbe5SNYaJ4v7qXpgSlvLpuljol_FAPRJJBU4FM1UIY68RAmwuFhsQXJuTvIp3E7QK_dZPIjv1KvWmn7o2Q"
                        width={160}
                        height={160}
                      />
                      <button className="absolute -bottom-3 -right-3 bg-white p-3 rounded-2xl shadow-lg text-primary border border-outline-variant/10 hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">photo_camera</span>
                      </button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-headline text-3xl font-extrabold text-on-surface">Oliver</h3>
                          <p className="text-tertiary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">verified</span> Purebred Beagle
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">
                            High Alert
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                        <div className="bg-surface-container p-4 rounded-2xl">
                          <p className="text-[10px] uppercase font-bold text-slate-500">Age</p>
                          <p className="text-lg font-bold">4.2 yrs</p>
                        </div>
                        <div className="bg-surface-container p-4 rounded-2xl">
                          <p className="text-[10px] uppercase font-bold text-slate-500">Weight</p>
                          <p className="text-lg font-bold">12.4 kg</p>
                        </div>
                        <div className="bg-surface-container p-4 rounded-2xl">
                          <p className="text-[10px] uppercase font-bold text-slate-500">Gender</p>
                          <p className="text-lg font-bold">Male</p>
                        </div>
                        <div className="bg-surface-container p-4 rounded-2xl">
                          <p className="text-[10px] uppercase font-bold text-slate-500">Status</p>
                          <p className="text-lg font-bold text-primary">Healthy</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Asymmetric Content Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Medical History */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-headline text-xl font-bold">Medical History</h4>
                        <span className="text-primary text-sm font-bold cursor-pointer hover:underline">View All</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-4 p-4 rounded-2xl border border-outline-variant/10 hover:bg-surface-container-low transition-colors group">
                          <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center text-on-secondary-fixed-variant shrink-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>vaccines</span>
                          </div>
                          <div>
                            <p className="font-bold text-on-surface">Rabies Booster</p>
                            <p className="text-sm text-slate-500">Completed: Oct 12, 2023</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-2xl border border-outline-variant/10 hover:bg-surface-container-low transition-colors group">
                          <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary shrink-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_information</span>
                          </div>
                          <div>
                            <p className="font-bold text-on-surface">Dental Cleaning</p>
                            <p className="text-sm text-slate-500">Completed: June 24, 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Weight Tracking Chart Area */}
                    <div className="bg-surface-container-low rounded-3xl p-6 relative overflow-hidden">
                      <h4 className="font-headline text-lg font-bold mb-4">Weight Trend</h4>
                      {/* Simplified Chart Visualization */}
                      <div className="h-32 flex items-end justify-between gap-1 mb-4">
                        <div className="w-full bg-primary/20 rounded-t-lg h-[60%]"></div>
                        <div className="w-full bg-primary/20 rounded-t-lg h-[65%]"></div>
                        <div className="w-full bg-primary/20 rounded-t-lg h-[58%]"></div>
                        <div className="w-full bg-primary/20 rounded-t-lg h-[75%]"></div>
                        <div className="w-full bg-primary/20 rounded-t-lg h-[82%]"></div>
                        <div className="w-full bg-primary rounded-t-lg h-[90%]"></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs font-semibold text-on-surface-variant">+0.8kg since Jan</p>
                        <button className="text-xs font-bold text-primary flex items-center gap-1">
                          Record Weight <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Dosage Chips Section */}
                  <div className="mt-12">
                    <h4 className="font-headline text-xl font-bold mb-6">Active Medications</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-tertiary-fixed p-4 rounded-2xl flex items-center gap-4 border border-tertiary-container/10">
                        <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>pill</span>
                        <div>
                          <p className="text-sm font-bold text-on-tertiary-fixed">Heartgard Plus</p>
                          <p className="text-[10px] font-medium text-tertiary/70 uppercase">Monthly - Next: Nov 01</p>
                        </div>
                      </div>
                      <div className="bg-secondary-fixed p-4 rounded-2xl flex items-center gap-4 border border-secondary-container/10">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>medication_liquid</span>
                        <div>
                          <p className="text-sm font-bold text-on-secondary-fixed">Joint Support Plus</p>
                          <p className="text-[10px] font-medium text-secondary/70 uppercase">Daily - Morning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <BottomNavBar />
    </div>
  )
}
