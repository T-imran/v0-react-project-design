"use client"

import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"
import { Search, Heart, MessageCircle, Share2, MapPin, MoreHorizontal, Image, Smile } from "lucide-react"

export default function CommunityFeedPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <TopAppBar />
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar activePath="/community" />
        
        {/* Main Feed Content */}
        <main className="flex-1 min-w-0 p-6 md:p-8 lg:p-12 pb-24 lg:pb-12">
          <div className="max-w-2xl mx-auto">
            {/* Editorial Header */}
            <header className="mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
                Community <span className="text-primary">Vibe</span>
              </h1>
              <p className="font-sans text-lg text-muted-foreground max-w-lg">
                The curated pulse of our pet-loving family. Share moments, seek advice, and celebrate the tails that wag.
              </p>
            </header>

            {/* Post Creation Interface */}
            <section className="bg-card rounded-2xl p-6 mb-12 shadow-sm border-l-4 border-primary">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                  <Image className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <textarea 
                    className="w-full border-none focus:ring-0 bg-transparent text-lg font-medium p-0 placeholder:text-muted-foreground/40 resize-none h-20" 
                    placeholder="What's your pet up to today?"
                    rows={2}
                  />
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm font-medium">
                        <Image className="w-4 h-4 text-primary" />
                        <span>Photo</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm font-medium">
                        <Smile className="w-4 h-4 text-accent" />
                        <span>Feeling</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm font-medium">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>Park</span>
                      </button>
                    </div>
                    <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Scrolling Feed */}
            <div className="space-y-12">
              {/* Post 1: High Editorial Style */}
              <article className="group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent-foreground">SO</div>
                    <div>
                      <h4 className="text-sm font-bold">Sarah Oliver</h4>
                      <p className="text-xs text-muted-foreground">2 hours ago - Brooklyn, NY</p>
                    </div>
                  </div>
                  <button className="p-2 text-muted-foreground hover:bg-muted rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative overflow-hidden rounded-3xl mb-4 bg-muted aspect-[4/5]">
                  <img 
                    alt="A handsome beagle" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3_Xs79CgG6pdv3fb5fJlCz3uY8MxWK0WqgxdnasFURsOZjHacvKTk5aCWDLw1PBfEpF1XtlhldmgevMeW9wjZ2Id0re9eRk5-0s4i66D1mPRC0zXPVNji1OnY3NmOlAO8y5_J-6nbqwoYhP9NyTlXX8eedkw9d8EJ7uvpZaGjUTE4ETkx5EXfegt9ELZvtJlFMMjbFOVJ42u7GKgz12LAqtXHO7P3v6Q4d3nqCrzWYe273P3sjqZxhWLwdP0PbtNVrzd_BtGzcUU-"
                  />
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Story Highlight</span>
                  </div>
                </div>
                <div className="px-2">
                  <p className="font-sans text-lg leading-relaxed mb-4">
                    Cooper finally mastered the &apos;wait&apos; command today! High-end treats are definitely the secret weapon. Who else is doing Sunday training sessions?
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-bold">1.2k</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-bold">48</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>

              {/* Post 2: Bento-style detail */}
              <article className="bg-muted rounded-[2rem] p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-[10px] font-bold uppercase tracking-widest mb-4">Health Update</span>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold leading-tight mb-4">Luna&apos;s recovery journey is going great.</h3>
                    <p className="text-muted-foreground mb-6">Huge thanks to the community for the surgeon recommendations. She&apos;s back to her favorite window spot!</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-card overflow-hidden">
                        <img 
                          alt="Pet Owner" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5spEEE1z5UDRXi4ez_SfOtolziNyd3R-gDiJnN1dtFCTDpBad7WjX9dAItbLwh97wkU5KSK4bP0stUWdZ0CQz1F94ZHAYJp3d35TirAr63D-arYsujXmbMiwjUbSlBAmbQPhdEnGQGwf1nOs0Gm5PTQBSLvvwhIdHdulDhNL5utTrEs8VRtzNGJvZrT0tB0vUawJa_KC8Sj7RdktdHmnihfRSFVMChramNSkFhgrS6sVYP3_G37eGgEbSkBvN0r8WYym7jlpYUXe"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold">Marcus Chen</span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                    <img 
                      alt="Happy Cat" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSZCFZtISck2Ul_2Bvc1xNQpsRPF2vTHSGQh9m_pVcUAab4prT7Uvnd38CYUT-claU62dAPzx_415NLvRkj8UxbWnrc30WqPr0qftAh1NeDKvzyCM1mJ5e2QZ2dUZDRixz1CC2e7qW9UUAqNwe-2rNp7G5VuNr9lATOOmnfV5Qeb45qEJzbqOLHdYbK0QGrcw92gQi88bQMc--Uxub1E28LuNG6lGYUJzTrENb3NTqVw1AafIcX3GmYimyG5r9BtSIu6hHymARGkC"
                    />
                  </div>
                </div>
              </article>

              {/* Post 3: Short Engagement */}
              <article className="group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">JD</div>
                    <div>
                      <h4 className="text-sm font-bold">Julianne Doe</h4>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 rounded-3xl overflow-hidden aspect-video">
                  <img 
                    alt="Golden Retriever" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3bY_dFppmv9Clv2k-BwgDxEoK8_NXcrvV5HsWuXZ-T-_AqU9yvhlEKHLDQ5OsIqajyuUp7hT24qFDc2TNDiIYxQjsIMIcu_XNFQCceJsNoTc-GV8sJjKpDPbvsfb381qlsPHm74XWA1cfPSL0QhKUBtLejvTNVML-ED38jI2726KFLTi2mhqiMmNpvIBmUQ7ErZHZKegdSDNTbainnzZAWBLiH-3iNp-VMs2jbn_70hqsf_Rgl5kDr3bb4iKzuDMGQz3r0ZmIY6Bg"
                  />
                  <img 
                    alt="Golden Retriever close up" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVEj3q54VX3iNpzNIMv6W5XD8-pATongp-XgpnxEXLddZ2NUPdokdU_qzMlehhKDlsb7jBXpVDaIuM4i711ExZAYQGrswRcmnwhYrmyCTn9JNWm99NX7EmZj6l83uL5EVLgHFekjTtg0cQss9l1LzY3c3R95HKf2Z8nU0eTwQ1TZXKBBNtQl5cUnorc7eyKm8MJKq-ZVSwAyMsC7ghDuVduDznBWDvTYMm0Q2nt9M_sP8JbwcXJdjXzyS0D5cBzk29DqBM8aLRuhwX"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="font-sans text-foreground leading-relaxed">Double trouble at the park today!</p>
                  <div className="flex items-center gap-6 mt-4">
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-bold">856</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-bold">32</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Trending & Events) */}
        <aside className="hidden xl:block w-80 h-[calc(100vh-4rem)] sticky top-16 p-8 overflow-y-auto">
          <div className="space-y-10">
            {/* Trending Topics */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Trending Topics</h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-primary font-bold mb-1">PET HEALTH</p>
                  <h4 className="font-headline font-bold text-foreground group-hover:text-primary transition-colors">Seasonal allergy management for poodles</h4>
                  <p className="text-xs text-muted-foreground mt-1">128 people talking about this</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-accent font-bold mb-1">LOCAL EVENTS</p>
                  <h4 className="font-headline font-bold text-foreground group-hover:text-accent transition-colors">Prospect Park Corgi Meetup</h4>
                  <p className="text-xs text-muted-foreground mt-1">Happening this Saturday, 10 AM</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-secondary font-bold mb-1">EDITORIAL</p>
                  <h4 className="font-headline font-bold text-foreground group-hover:text-secondary transition-colors">5 Best Organic Pet Foods of 2024</h4>
                  <p className="text-xs text-muted-foreground mt-1">Fresh from our vet consultants</p>
                </div>
              </div>
            </section>

            {/* Local Events Map Card */}
            <section className="bg-muted rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <h3 className="font-headline font-bold text-xl mb-2 relative z-10">Local Map</h3>
              <p className="text-xs text-muted-foreground mb-4 relative z-10">Find 12 pet-friendly meetups near you.</p>
              <div className="w-full h-32 rounded-2xl bg-muted-foreground/20 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  alt="Stylized map of Brooklyn" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFvY6_ZSA0kVqbKoCyLgDJbVF7WNf28rpvlaXV8WRJsq8u8fj7kwbOaxFDYuTSqKG-tAz1vJgET99Juua96SajH24DtWAYenOYkBdthDKbXNh_yiROtVFtzvoy21ww3UBiMf2pcYsSw_Po6i4vHvTW0IHl05-qkV17l0qGgOcgyPNc1ZV4xWT2UzKDaWDZw0_voIxpMryyApIp1kyBB8ZAw1-Q1EiXpAKDpPVsfyOPUQJTonXA_RToKTY2WpxkZyEKiNOgeeOJXF8"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              </div>
              <button className="w-full mt-4 py-2 text-xs font-bold text-primary uppercase tracking-widest border border-primary/20 rounded-full hover:bg-primary/5 transition-colors">
                Open Explorer
              </button>
            </section>

            {/* Featured Expert */}
            <section className="bg-card border border-border/10 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  alt="Dr. Vet" 
                  className="w-12 h-12 rounded-xl object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtLtdFD504vmz6GAXgaUqqzXFmzLhlAG1_mCr9R8W_oVTHgPWEQ1lMAbaWx3W5k8nHTkEuwUVPnoLYhyMkkc5pWvs7sNL1xCR2e-tCEvH-eA5CJpBvHT3AUEud7D9-c6nHQNKxeyFZ2ReMgWtZ12NCCoOk5K-_uuxqYElXmluSJj4-QI1U7Nwa8aw0P7RAC83sUBx3fvQ1MXgiC28D361Sex_r5wG7Gj0lO2bpNk1Lf4cBevTPQJf-NP2gbCSwNWd0yTFmawQ7nFrn"
                />
                <div>
                  <h5 className="text-sm font-bold">Dr. Elena Rodriguez</h5>
                  <p className="text-[10px] text-secondary font-semibold">Verified Vet Consultant</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                &quot;I&apos;m here to answer your pet health questions every Tuesday. Don&apos;t hesitate to reach out!&quot;
              </p>
              <button className="w-full py-2 text-xs font-bold bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors">
                Ask a Question
              </button>
            </section>
          </div>
        </aside>
      </div>
      <BottomNavBar activePath="/community" />
    </div>
  )
}
