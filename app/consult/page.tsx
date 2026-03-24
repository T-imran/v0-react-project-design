import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"
import Image from "next/image"

export default function ConsultPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        <TopAppBar searchPlaceholder="Search specialists..." />
        
        <div className="p-6 md:p-10 space-y-10 pb-24 md:pb-10 max-w-7xl mx-auto">
          {/* Hero Header */}
          <section className="relative overflow-hidden bg-primary-container rounded-3xl p-8 md:p-12 text-white">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                24/7 Telehealth
              </span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">
                Expert Vet Care, <br />Anytime, Anywhere
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
                Connect with licensed veterinarians through video, chat, or phone. Get immediate guidance for your pet&apos;s health concerns from the comfort of home.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-white/10 hover:scale-[0.98] transition-transform flex items-center gap-2">
                  <span className="material-symbols-outlined">videocam</span> Start Video Call
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">schedule</span> Book Appointment
                </button>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <span className="material-symbols-outlined text-[350px]">stethoscope</span>
            </div>
          </section>

          {/* Quick Access Options */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emergency
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Urgent Care</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                Immediate consultation for emergencies. Connect with an on-call vet in under 5 minutes.
              </p>
              <span className="text-tertiary font-bold text-sm flex items-center gap-1 group-hover:underline">
                Get Help Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat_bubble
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Chat Support</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                Text-based support for non-urgent questions. Get advice on nutrition, behavior, and more.
              </p>
              <span className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:underline">
                Start Chat <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  description
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Second Opinion</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                Upload records for a comprehensive review from our specialist team.
              </p>
              <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:underline">
                Submit Records <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </section>

          {/* Available Vets Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-headline text-2xl font-bold">Available Now</h2>
                <p className="text-on-surface-variant text-sm">Certified veterinarians ready to help</p>
              </div>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                View All Specialists <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Sarah Chen",
                  specialty: "Internal Medicine",
                  experience: "12 years experience",
                  rating: "4.9",
                  available: true,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGZr1DCJ7xCwSS3q1jnwvfTVFTKtUDiepJ4M26bqgJAeQYnKxbOEoeYhovpaFTz0-tqNdhTedQ4wnMjix8Athi11xAf9xq5vch2ppWgyx0EBHxOKa_sL6mNhvlFDMMac9lvJIGboo2n3Oy42reZ0GRRlIYtYnILQjf85JVaqL0thYaUf5_rnIyw1QanAJbe5SNYaJ4v7qXpgSlvLpuljol_FAPRJJBU4FM1UIY68RAmwuFhsQXJuTvIp3E7QK_dZPIjv1KvWmn7o2Q",
                },
                {
                  name: "Dr. Michael Torres",
                  specialty: "Surgery & Orthopedics",
                  experience: "8 years experience",
                  rating: "4.8",
                  available: true,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-246f3MT68jKo-FrhLwJ32LMpdR1jMaW2VDXTz8fTg-1y2RO0JL9EI9lq1WGmVznVS0S52_fRUCuA03Rr3hcpxQa_2GGxz2SfiN3XY6n25HpwRzzRjlNF3qOd_lIqOvYoUOVrslzDuqzFwjA46XfmR-z_CcqbL_kC0_8wy143estH8mWIj_EbxXVqdjDfOajLwY-xil1GcaX3wg0Xu6GRWkTu-RQ9xnwwCxC08voGJViagfObnvBUjJCsqCGB9tV7lVy8cgY5p7ce",
                },
                {
                  name: "Dr. Emily Watson",
                  specialty: "Dermatology",
                  experience: "6 years experience",
                  rating: "4.7",
                  available: false,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsAz4d16Gw7Q7aBLdm6O05n44BWvf7LDOId_r1h82k-_dZAd-45Z-UuJLYlhmEKmSzEGk0Ah4ZNQxOnJ9L0PtfVQxLIsLZAOC6_DZbJJTUGLQz7C9I8J7he67o9prdgz0efnMtBzKWMagqVAlAeudlgK9aApom8-O4v2yYt7w5PLRCm57eRFeQlmqngbNw1euJWnIxVCHfNnQyPMQaQ7bYpnOw08LO_qJ6FwAIjvfql_kkXE3V5d_wuke1F9TNNRK7sxb4t-OW9uWY",
                },
                {
                  name: "Dr. James Park",
                  specialty: "Cardiology",
                  experience: "15 years experience",
                  rating: "5.0",
                  available: true,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBktW2Esz1wkcKHav5MPq-pDCKq8S2V47R1XRO-p71cpYxW2kdVnl7ctzz-xfYjvfKaXOsj7fIX2EwtxFXAX_iQWc7AIdcbkgm43Q0XUEg41KeAWe9WJsH4Mhab0wxuIywQVf89n5zjoClMrAexcyIHaz1kzGiZyLs22MaE-clU-Sj5hMQt1sXsaYjGZXG9yEEpryJ1c59XDlMEBzr3fZjtGrzZoM8oV2LeKwmnXNHfe2zQwwLck1gcN5ixXOGtiHyRymIJT43Y0XgL",
                },
              ].map((vet, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 group hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <div className="h-40 bg-surface-container relative overflow-hidden">
                    <Image
                      alt={vet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={vet.img}
                      width={300}
                      height={160}
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      vet.available ? "bg-secondary text-white" : "bg-surface-container-high text-on-surface-variant"
                    }`}>
                      {vet.available ? "Online" : "Busy"}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-on-surface">{vet.name}</h4>
                    <p className="text-sm text-tertiary font-medium mb-1">{vet.specialty}</p>
                    <p className="text-xs text-on-surface-variant mb-3">{vet.experience}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm">
                        <span className="material-symbols-outlined text-sm text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-bold">{vet.rating}</span>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                        vet.available
                          ? "bg-primary text-white hover:bg-primary-container"
                          : "bg-surface-container text-on-surface-variant"
                      }`}>
                        {vet.available ? "Consult" : "Schedule"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Consultation History */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-2xl font-bold mb-6">Recent Consultations</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Digestive Health Follow-up",
                    pet: "Luna",
                    vet: "Dr. Sarah Chen",
                    date: "Oct 10, 2023",
                    status: "Completed",
                    icon: "gastroenterology",
                    color: "secondary",
                  },
                  {
                    title: "Annual Wellness Check",
                    pet: "Milo",
                    vet: "Dr. James Park",
                    date: "Sep 28, 2023",
                    status: "Completed",
                    icon: "health_and_safety",
                    color: "primary",
                  },
                  {
                    title: "Skin Allergy Consultation",
                    pet: "Luna",
                    vet: "Dr. Emily Watson",
                    date: "Sep 15, 2023",
                    status: "Follow-up Needed",
                    icon: "dermatology",
                    color: "tertiary",
                  },
                ].map((consult, i) => (
                  <div key={i} className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      consult.color === "secondary"
                        ? "bg-secondary-fixed text-secondary"
                        : consult.color === "tertiary"
                        ? "bg-tertiary-fixed text-tertiary"
                        : "bg-primary-fixed text-primary"
                    }`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {consult.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-on-surface">{consult.title}</h4>
                      <p className="text-sm text-on-surface-variant">
                        {consult.pet} • {consult.vet}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-on-surface-variant mb-1">{consult.date}</p>
                      <span className={`text-xs font-bold ${
                        consult.status === "Completed" ? "text-secondary" : "text-tertiary"
                      }`}>
                        {consult.status}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                      chevron_right
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Plan Summary */}
            <div className="lg:col-span-5">
              <h2 className="font-headline text-2xl font-bold mb-6">Active Care Plans</h2>
              <div className="bg-surface-container-low rounded-3xl p-6 space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-outline-variant/10">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medication</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface">Allergy Management</h4>
                    <p className="text-sm text-on-surface-variant">Luna - 8 weeks remaining</p>
                    <div className="mt-3 w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <div className="bg-tertiary h-full w-[35%]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface">Weight Management</h4>
                    <p className="text-sm text-on-surface-variant">Milo - 4 weeks remaining</p>
                    <div className="mt-3 w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary h-full w-[70%]"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 border-2 border-dashed border-outline-variant/30 rounded-xl text-on-surface-variant font-semibold hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">add</span> Add Care Plan
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavBar />
    </div>
  )
}
