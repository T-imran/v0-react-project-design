import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"

export default function HealthMonitorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        <TopAppBar searchPlaceholder="Search records..." />
        
        <div className="p-6 md:p-10 space-y-10 pb-24 md:pb-10 max-w-7xl mx-auto">
          {/* Hero Header */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-2 block">Vitals Tracking</span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
                Luna&apos;s Health Insights
              </h1>
              <p className="mt-4 text-on-surface-variant text-lg leading-relaxed max-w-xl">
                A comprehensive overview of daily activity, cardiac health, and upcoming medical requirements for your Golden Retriever.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">weight</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Current Weight</p>
                  <p className="text-xl font-bold">24.5 kg</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid - Vitals & Activity */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Activity Chart Card */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm shadow-cyan-900/5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface">Activity Level</h3>
                  <p className="text-sm text-on-surface-variant">Past 7 days performance</p>
                </div>
                <select className="bg-surface-container border-none text-sm rounded-full px-4 py-1 focus:ring-primary/20">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-2">
                {/* Chart Bars */}
                {[
                  { day: "MON", height: "40%" },
                  { day: "TUE", height: "65%" },
                  { day: "WED", height: "55%" },
                  { day: "THU", height: "85%" },
                  { day: "FRI", height: "45%" },
                  { day: "SAT", height: "95%" },
                  { day: "SUN", height: "30%" },
                ].map((item, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-2 group/bar">
                    <div
                      className="w-full bg-primary/10 rounded-t-lg group-hover/bar:bg-primary transition-all duration-300"
                      style={{ height: item.height }}
                    ></div>
                    <span className="text-[10px] font-bold text-on-surface-variant">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Heart Rate Mini Card */}
            <div className="md:col-span-4 bg-primary text-white rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="text-sm font-semibold text-primary-fixed">Resting Heart Rate</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-5xl font-black">72</h4>
                  <span className="text-lg opacity-80">BPM</span>
                </div>
              </div>
              <div className="mt-4 z-10">
                <p className="text-sm text-primary-fixed/80 leading-snug">
                  Luna&apos;s heart rate is within the optimal range for a resting Golden Retriever.
                </p>
              </div>
              {/* Decorative Wave */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <path d="M0 100 Q 50 20, 100 100 T 200 100 T 300 100 T 400 100" fill="none" stroke="white" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </section>

          {/* Reminders & Calendar Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Calendar View */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-2xl text-on-surface">Schedule</h2>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <span className="font-bold">October 2023</span>
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-6">
                <div className="grid grid-cols-7 mb-4">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="text-center text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-y-4">
                  {/* Previous month */}
                  {[24, 25, 26, 27, 28, 29].map((d) => (
                    <div key={d} className="h-12 flex items-center justify-center text-on-surface/20">{d}</div>
                  ))}
                  {/* Current month */}
                  {Array.from({ length: 22 }, (_, i) => i + 1).map((d) => (
                    <div
                      key={d}
                      className={`h-12 flex items-center justify-center font-medium relative ${
                        d === 12
                          ? "bg-primary text-white rounded-xl font-bold"
                          : "hover:bg-surface-container-high rounded-xl cursor-pointer"
                      }`}
                    >
                      {d}
                      {(d === 4 || d === 16) && (
                        <div className={`absolute bottom-1 w-1 h-1 rounded-full ${d === 4 ? "bg-tertiary" : "bg-primary"}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Reminders List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-headline font-bold text-2xl text-on-surface">Up Next</h2>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">add</span> New Reminder
                </button>
              </div>
              <div className="space-y-4">
                {/* Reminder Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/10 shadow-sm flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>pill</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1 block">Medication</span>
                    <h4 className="font-bold text-on-surface">Heartworm Preventive</h4>
                    <p className="text-sm text-on-surface-variant">Today at 10:30 AM</p>
                  </div>
                  <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</button>
                </div>

                {/* Reminder Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/10 shadow-sm flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>vaccines</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1 block">Vaccination</span>
                    <h4 className="font-bold text-on-surface">Rabies Booster</h4>
                    <p className="text-sm text-on-surface-variant">Oct 16 - Vet Clinic</p>
                  </div>
                  <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</button>
                </div>

                {/* Reminder Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/10 shadow-sm flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wash</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">Grooming</span>
                    <h4 className="font-bold text-on-surface">Bath &amp; Nail Trim</h4>
                    <p className="text-sm text-on-surface-variant">Oct 24 - Home</p>
                  </div>
                  <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">edit</button>
                </div>
              </div>
            </div>
          </section>

          {/* Health Timeline */}
          <section className="space-y-6">
            <h2 className="font-headline font-bold text-2xl text-on-surface">Health Timeline</h2>
            <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-secondary-fixed">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-secondary-container border-4 border-background"></div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Vaccination</span>
                      <h4 className="font-headline text-lg font-bold mt-1">DHPP Booster Shot</h4>
                    </div>
                    <span className="text-xs text-on-surface-variant">Oct 1, 2023</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Annual booster completed at City Vet Clinic. Next due: October 2024.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-tertiary-container border-4 border-background"></div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Check-up</span>
                      <h4 className="font-headline text-lg font-bold mt-1">Routine Wellness Exam</h4>
                    </div>
                    <span className="text-xs text-on-surface-variant">Sep 15, 2023</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    All vitals normal. Weight stable at 24.5kg. Recommended continued joint supplements.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary-container border-4 border-background"></div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Grooming</span>
                      <h4 className="font-headline text-lg font-bold mt-1">Professional Grooming Session</h4>
                    </div>
                    <span className="text-xs text-on-surface-variant">Aug 28, 2023</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Full coat trim, nail clipping, and ear cleaning completed at Paws & Claws Spa.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavBar />
    </div>
  )
}
