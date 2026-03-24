import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        <TopAppBar searchPlaceholder="Search pet health data..." />
        
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 pb-24 md:pb-8">
          {/* Hero / Welcome Section */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                Good morning, <br /><span className="text-primary">Jonathan.</span>
              </h2>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Today is a great day for a walk. Luna&apos;s heart rate has been stable all week.
              </p>
            </div>
            
            {/* Upcoming Activity Card */}
            <div className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <p className="text-sm font-semibold text-primary mb-1">Upcoming Activity</p>
                <h3 className="font-headline text-2xl font-bold">Vaccination: Luna</h3>
                <p className="text-on-surface-variant text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  Tomorrow at 10:30 AM
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  vaccines
                </span>
              </div>
            </div>
          </section>

          {/* Pet Profiles Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-2xl font-bold tracking-tight">Your Companions</h3>
              <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
                Manage Profiles <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Card 1 - Luna */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 hover:shadow-xl hover:shadow-cyan-900/5 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      alt="Luna the Golden Retriever"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsAz4d16Gw7Q7aBLdm6O05n44BWvf7LDOId_r1h82k-_dZAd-45Z-UuJLYlhmEKmSzEGk0Ah4ZNQxOnJ9L0PtfVQxLIsLZAOC6_DZbJJTUGLQz7C9I8J7he67o9prdgz0efnMtBzKWMagqVAlAeudlgK9aApom8-O4v2yYt7w5PLRCm57eRFeQlmqngbNw1euJWnIxVCHfNnQyPMQaQ7bYpnOw08LO_qJ6FwAIjvfql_kkXE3V5d_wuke1F9TNNRK7sxb4t-OW9uWY"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Healthy
                  </span>
                </div>
                <h4 className="font-headline text-xl font-bold">Luna</h4>
                <p className="text-on-surface-variant text-sm mb-4">Golden Retriever - 2y 4m</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Weight</span>
                    <span className="font-semibold text-on-surface">24.5 kg</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full w-[75%]"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Activity Score</span>
                    <span className="font-semibold text-on-surface">88%</span>
                  </div>
                </div>
              </div>

              {/* Profile Card 2 - Milo */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 hover:shadow-xl hover:shadow-cyan-900/5 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      alt="Milo the Tabby Cat"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-246f3MT68jKo-FrhLwJ32LMpdR1jMaW2VDXTz8fTg-1y2RO0JL9EI9lq1WGmVznVS0S52_fRUCuA03Rr3hcpxQa_2GGxz2SfiN3XY6n25HpwRzzRjlNF3qOd_lIqOvYoUOVrslzDuqzFwjA46XfmR-z_CcqbL_kC0_8wy143estH8mWIj_EbxXVqdjDfOajLwY-xil1GcaX3wg0Xu6GRWkTu-RQ9xnwwCxC08voGJViagfObnvBUjJCsqCGB9tV7lVy8cgY5p7ce"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Medication
                  </span>
                </div>
                <h4 className="font-headline text-xl font-bold">Milo</h4>
                <p className="text-on-surface-variant text-sm mb-4">Domestic Shorthair - 5y 1m</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Weight</span>
                    <span className="font-semibold text-on-surface">4.2 kg</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                    <div className="bg-tertiary h-full w-[40%]"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Activity Score</span>
                    <span className="font-semibold text-on-surface">42%</span>
                  </div>
                </div>
              </div>

              {/* Add New Pet Card */}
              <button className="bg-surface-container-high/30 border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-primary/50 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <span className="font-bold text-sm">Add New Pet</span>
              </button>
            </div>
          </section>

          {/* Health Reminders & Quick Actions Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reminders (Column 1 & 2) */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-headline text-2xl font-bold tracking-tight">Health Timeline</h3>
              <div className="space-y-4">
                {/* Reminder Item 1 */}
                <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      medical_information
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">Deworming Treatment</h5>
                    <p className="text-xs text-on-surface-variant">Luna - Due in 2 days</p>
                  </div>
                  <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-transform">
                    Mark Done
                  </button>
                </div>

                {/* Reminder Item 2 */}
                <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      medication
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">Daily Vitamin Drop</h5>
                    <p className="text-xs text-on-surface-variant">Milo - Today, 6:00 PM</p>
                  </div>
                  <span className="text-xs font-semibold text-tertiary">Urgent</span>
                </div>

                {/* Reminder Item 3 - Completed */}
                <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors opacity-60">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">Annual Dental Checkup</h5>
                    <p className="text-xs text-on-surface-variant">Completed yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Vet Consult (Column 3) */}
            <div className="bg-gradient-to-br from-cyan-900 to-cyan-950 rounded-2xl p-8 text-white relative overflow-hidden flex flex-col h-full">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase mb-4">
                  Available Now
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">Talk to a Vet</h3>
                <p className="text-cyan-100/70 text-sm mb-8 leading-relaxed">
                  Need professional advice? Start a video call or chat with our certified veterinarians in minutes.
                </p>
                <button className="w-full py-4 bg-white text-cyan-950 font-extrabold rounded-xl shadow-lg active:scale-95 transition-transform">
                  Consult Now
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20">
                <span className="material-symbols-outlined text-[180px]">videocam</span>
              </div>
            </div>
          </section>

          {/* Curated Essentials */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-2xl font-bold tracking-tight">Curated Essentials</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors text-primary">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="group">
                <div className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-3 relative">
                  <Image
                    alt="Organic Dog Shampoo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7U66JCS5l9mFq9QfE1gGaBT9E9Mmw2tO89ULXKEEuKZL9ThC3peh2Z7zdvgVerHK3Z_LGh0WiGyQLxk2OvmFvi3WnhhHpvh9iaoatjbd-CQn0YR_BsU6VphHpxXYJETtWgYucwGa6ZF64uuiOIusFKD8ZPfv6JWIvu2wmM_qyXOSVO_4iqt3vNCbWw8TmeEi7B6Hl-gMBaNyg6LiGYIpXp_JOqxnaCrSOSRy8zbXVbWwdvK0n9tsHm4fV87-nIesgCGdOIUItIjMK"
                    width={200}
                    height={200}
                  />
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                  </button>
                </div>
                <h6 className="font-bold text-sm">Zen-Paw Shampoo</h6>
                <p className="text-xs text-on-surface-variant mb-1">Organic Lavender Blend</p>
                <span className="font-headline text-primary font-bold">$18.00</span>
              </div>

              {/* Product 2 */}
              <div className="group">
                <div className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-3 relative">
                  <Image
                    alt="Plush Pet Bed"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktW2Esz1wkcKHav5MPq-pDCKq8S2V47R1XRO-p71cpYxW2kdVnl7ctzz-xfYjvfKaXOsj7fIX2EwtxFXAX_iQWc7AIdcbkgm43Q0XUEg41KeAWe9WJsH4Mhab0wxuIywQVf89n5zjoClMrAexcyIHaz1kzGiZyLs22MaE-clU-Sj5hMQt1sXsaYjGZXG9yEEpryJ1c59XDlMEBzr3fZjtGrzZoM8oV2LeKwmnXNHfe2zQwwLck1gcN5ixXOGtiHyRymIJT43Y0XgL"
                    width={200}
                    height={200}
                  />
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                  </button>
                </div>
                <h6 className="font-bold text-sm">Ortho Cloud Bed</h6>
                <p className="text-xs text-on-surface-variant mb-1">Memory Foam - Medium</p>
                <span className="font-headline text-primary font-bold">$89.00</span>
              </div>

              {/* Product 3 */}
              <div className="group hidden md:block">
                <div className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-3 relative">
                  <Image
                    alt="Vitamin Supplements"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADb4dM9mVsMtfvPnudUzJxxcIu4hAMC-3e7AZZFACKPgXxzjQn-y1Kwyak7hkhIrd6H1Jx1PakEs7ASZoMM3j4dB6whXTwtsfIKYB-Q18R3ytx62Zoec1T8ufyMUFxirnd4lvbZ4LhCbSrw5gMb6esquEn6jucV0go83EPN7YDHZNbkoQDHhQRkMnGYMulObbtYWcd0w79ZeGfYcBNzzZdLi57UiT5dJ9PHQEWgTlm-O6bQMmTb9j_B0PKmEbSIrzYAO3cerHkCGOW"
                    width={200}
                    height={200}
                  />
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                  </button>
                </div>
                <h6 className="font-bold text-sm">Calm Mist Apothecary</h6>
                <p className="text-xs text-on-surface-variant mb-1">Holistic Wellness</p>
                <span className="font-headline text-primary font-bold">$24.00</span>
              </div>

              {/* Product 4 */}
              <div className="group hidden md:block">
                <div className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-3 relative">
                  <Image
                    alt="Premium Pet Food"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhzsLc--5YNT5764wpInOEidF4itVC89EmWHVdhZvU5atWD60RWlmVR8pmJ5Uphed2GwTZ_C5P5jHzFx7AAl2zxjJoKU59dSRSKgMSwmenMUwv7EjonFiUIRR112QdpXlHSGSC47TV2XDoDemhvvV83bMQAZrt66KAxRZrHmhEUsvHZhWKHZY25PoGgMN4AeSwk172JU4beHNytnO88lYP3qJPhjj-nCWfjcMO7t6cEU5ZxpYepEAwcMxM9GN0xeGr4GMwes8pWkH"
                    width={200}
                    height={200}
                  />
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                  </button>
                </div>
                <h6 className="font-bold text-sm">Botanical Grain-Free</h6>
                <p className="text-xs text-on-surface-variant mb-1">Curated Nutrition - 5kg</p>
                <span className="font-headline text-primary font-bold">$42.00</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavBar />
    </div>
  )
}
