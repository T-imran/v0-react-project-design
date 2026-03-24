import { Sidebar, TopAppBar, BottomNavBar } from "@/components/layout"
import Image from "next/image"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        <TopAppBar searchPlaceholder="Search products, brands..." />
        
        <div className="p-6 md:p-10 space-y-10 pb-24 md:pb-10 max-w-7xl mx-auto">
          {/* Hero Header with Cart */}
          <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Premium Catalog</span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
                Curated Pet Essentials
              </h1>
              <p className="mt-4 text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Thoughtfully selected products for discerning pet parents. From artisanal treats to eco-conscious accessories.
              </p>
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[0.98] transition-transform w-fit">
              <span className="material-symbols-outlined">shopping_cart</span> View Cart <span className="bg-white text-primary px-2 py-0.5 rounded-full text-sm font-bold">3</span>
            </button>
          </section>

          {/* Category Navigation */}
          <section className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { icon: "recommend", label: "All Picks", active: true },
              { icon: "nutrition", label: "Nutrition" },
              { icon: "pets", label: "Wellness" },
              { icon: "smart_toy", label: "Toys" },
              { icon: "spa", label: "Grooming" },
              { icon: "bed", label: "Comfort" },
            ].map((cat, i) => (
              <button
                key={i}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  cat.active
                    ? "bg-secondary-container text-on-secondary-container border-2 border-secondary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined" style={cat.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </section>

          {/* Featured Hero Product */}
          <section className="bg-tertiary-fixed rounded-3xl overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center z-10">
                <span className="inline-block bg-tertiary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit mb-4">
                  Featured This Week
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-extrabold mb-4">
                  Botanical Balance Kibble
                </h3>
                <p className="text-on-tertiary-fixed-variant mb-8 text-base max-w-md leading-relaxed">
                  Grain-free, slow-cooked with wild salmon, turmeric and organic blueberries for optimal gut health and coat shine.
                </p>
                <div className="flex items-center gap-6">
                  <button className="bg-white text-tertiary font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-tertiary/20 hover:scale-[0.98] transition-transform">
                    Add to Cart - $56.00
                  </button>
                  <button className="font-bold text-tertiary hover:underline flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  alt="Featured product - Premium Dog Food"
                  className="max-h-80 object-contain relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhzsLc--5YNT5764wpInOEidF4itVC89EmWHVdhZvU5atWD60RWlmVR8pmJ5Uphed2GwTZ_C5P5jHzFx7AAl2zxjJoKU59dSRSKgMSwmenMUwv7EjonFiUIRR112QdpXlHSGSC47TV2XDoDemhvvV83bMQAZrt66KAxRZrHmhEUsvHZhWKHZY25PoGgMN4AeSwk172JU4beHNytnO88lYP3qJPhjj-nCWfjcMO7t6cEU5ZxpYepEAwcMxM9GN0xeGr4GMwes8pWkH"
                  width={320}
                  height={320}
                />
                <div className="absolute w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              </div>
            </div>
          </section>

          {/* Product Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-bold">Our Selection</h2>
              <div className="flex items-center gap-4">
                <select className="bg-surface-container-low border-none text-sm rounded-full px-4 py-2 focus:ring-primary/20">
                  <option>Sort: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7U66JCS5l9mFq9QfE1gGaBT9E9Mmw2tO89ULXKEEuKZL9ThC3peh2Z7zdvgVerHK3Z_LGh0WiGyQLxk2OvmFvi3WnhhHpvh9iaoatjbd-CQn0YR_BsU6VphHpxXYJETtWgYucwGa6ZF64uuiOIusFKD8ZPfv6JWIvu2wmM_qyXOSVO_4iqt3vNCbWw8TmeEi7B6Hl-gMBaNyg6LiGYIpXp_JOqxnaCrSOSRy8zbXVbWwdvK0n9tsHm4fV87-nIesgCGdOIUItIjMK",
                  name: "Zen-Paw Shampoo",
                  description: "Organic Lavender Blend",
                  price: "$18.00",
                  tag: "Bestseller",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBktW2Esz1wkcKHav5MPq-pDCKq8S2V47R1XRO-p71cpYxW2kdVnl7ctzz-xfYjvfKaXOsj7fIX2EwtxFXAX_iQWc7AIdcbkgm43Q0XUEg41KeAWe9WJsH4Mhab0wxuIywQVf89n5zjoClMrAexcyIHaz1kzGiZyLs22MaE-clU-Sj5hMQt1sXsaYjGZXG9yEEpryJ1c59XDlMEBzr3fZjtGrzZoM8oV2LeKwmnXNHfe2zQwwLck1gcN5ixXOGtiHyRymIJT43Y0XgL",
                  name: "Ortho Cloud Bed",
                  description: "Memory Foam - Medium",
                  price: "$89.00",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADb4dM9mVsMtfvPnudUzJxxcIu4hAMC-3e7AZZFACKPgXxzjQn-y1Kwyak7hkhIrd6H1Jx1PakEs7ASZoMM3j4dB6whXTwtsfIKYB-Q18R3ytx62Zoec1T8ufyMUFxirnd4lvbZ4LhCbSrw5gMb6esquEn6jucV0go83EPN7YDHZNbkoQDHhQRkMnGYMulObbtYWcd0w79ZeGfYcBNzzZdLi57UiT5dJ9PHQEWgTlm-O6bQMmTb9j_B0PKmEbSIrzYAO3cerHkCGOW",
                  name: "Calm Mist Apothecary",
                  description: "Holistic Wellness",
                  price: "$24.00",
                  tag: "New",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRhzsLc--5YNT5764wpInOEidF4itVC89EmWHVdhZvU5atWD60RWlmVR8pmJ5Uphed2GwTZ_C5P5jHzFx7AAl2zxjJoKU59dSRSKgMSwmenMUwv7EjonFiUIRR112QdpXlHSGSC47TV2XDoDemhvvV83bMQAZrt66KAxRZrHmhEUsvHZhWKHZY25PoGgMN4AeSwk172JU4beHNytnO88lYP3qJPhjj-nCWfjcMO7t6cEU5ZxpYepEAwcMxM9GN0xeGr4GMwes8pWkH",
                  name: "Botanical Grain-Free",
                  description: "Curated Nutrition - 5kg",
                  price: "$42.00",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkqE5RZLLo9UeMLMRHcZ2qw5OhCT1tTQaTk_vPHVhCHh5J5-R_y0QAXz-JLc-xJQu6u-T-iVPJlWVA8VVNBC2w_X2lZjTSxh2t2Cjlsuk_sJdIBvZYMpT2NUjlXRDN5vY",
                  name: "Hemp Calm Treats",
                  description: "Anxiety Relief - 30ct",
                  price: "$32.00",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe_YME_aaYFcM4HfKlqXi5H3V8u6nSiO0j7H4N1hzHpBi9F0A3kT2lNfGmvOe9wR8lZYf_pDwG9jlT_sZ3wNLZ8",
                  name: "Salmon Oil Plus",
                  description: "Coat & Joint Health",
                  price: "$28.00",
                  tag: "Popular",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsAz4d16Gw7Q7aBLdm6O05n44BWvf7LDOId_r1h82k-_dZAd-45Z-UuJLYlhmEKmSzEGk0Ah4ZNQxOnJ9L0PtfVQxLIsLZAOC6_DZbJJTUGLQz7C9I8J7he67o9prdgz0efnMtBzKWMagqVAlAeudlgK9aApom8-O4v2yYt7w5PLRCm57eRFeQlmqngbNw1euJWnIxVCHfNnQyPMQaQ7bYpnOw08LO_qJ6FwAIjvfql_kkXE3V5d_wuke1F9TNNRK7sxb4t-OW9uWY",
                  name: "Ceramic Slow Feeder",
                  description: "Anti-Gulp Design",
                  price: "$35.00",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-246f3MT68jKo-FrhLwJ32LMpdR1jMaW2VDXTz8fTg-1y2RO0JL9EI9lq1WGmVznVS0S52_fRUCuA03Rr3hcpxQa_2GGxz2SfiN3XY6n25HpwRzzRjlNF3qOd_lIqOvYoUOVrslzDuqzFwjA46XfmR-z_CcqbL_kC0_8wy143estH8mWIj_EbxXVqdjDfOajLwY-xil1GcaX3wg0Xu6GRWkTu-RQ9xnwwCxC08voGJViagfObnvBUjJCsqCGB9tV7lVy8cgY5p7ce",
                  name: "Bamboo Brush Set",
                  description: "Eco-Grooming Kit",
                  price: "$22.00",
                },
              ].map((product, i) => (
                <div key={i} className="group">
                  <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden relative mb-4">
                    <Image
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={product.img}
                      width={300}
                      height={300}
                    />
                    {product.tag && (
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        product.tag === "Bestseller"
                          ? "bg-secondary text-white"
                          : product.tag === "New"
                          ? "bg-tertiary text-white"
                          : "bg-primary text-white"
                      }`}>
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                    </button>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">favorite</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-on-surface">{product.name}</h4>
                  <p className="text-sm text-on-surface-variant mb-1">{product.description}</p>
                  <span className="font-headline text-primary font-bold text-lg">{product.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Subscription Banner */}
          <section className="bg-surface-container-low rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  Save 20%
                </span>
                <h3 className="font-headline text-3xl font-extrabold text-on-surface mb-4">
                  Subscribe &amp; Save
                </h3>
                <p className="text-on-surface-variant mb-8 max-w-md">
                  Never run out of essentials. Set up recurring deliveries for food, treats, and medications with exclusive member discounts.
                </p>
                <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform flex items-center gap-2">
                  <span className="material-symbols-outlined">autorenew</span> Start Subscription
                </button>
              </div>
              <div className="relative h-40 md:h-auto flex items-center justify-center">
                <div className="flex -space-x-6">
                  <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center shadow-xl rotate-[-6deg]">
                    <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      nutrition
                    </span>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-tertiary-fixed flex items-center justify-center shadow-xl z-10">
                    <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_shipping
                    </span>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center shadow-xl rotate-[6deg]">
                    <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      redeem
                    </span>
                  </div>
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
