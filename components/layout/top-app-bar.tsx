"use client"

import Image from "next/image"

interface TopAppBarProps {
  showSearch?: boolean
  searchPlaceholder?: string
}

export function TopAppBar({ showSearch = true, searchPlaceholder = "Search..." }: TopAppBarProps) {
  return (
    <header className="flex items-center justify-between px-6 h-16 w-full sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm shadow-cyan-900/5 md:pl-72">
      <div className="flex items-center gap-4 flex-1">
        {showSearch && (
          <div className="relative w-full max-w-md hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full focus:ring-2 focus:ring-primary/20 text-sm"
              placeholder={searchPlaceholder}
              type="text"
            />
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-cyan-900 leading-none">Alexandra Wright</p>
            <p className="text-[10px] text-slate-500">Premium Member</p>
          </div>
          <Image
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary-container/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaTLOuR533uxUHr6gjYhjphkcMVFsHyodUTUIuqsi_mtaC9NdsyNVscicSurpwxw0_AVSrq7wKX5xfIAjxA40Ni5KxFhpZ2E7UJ4huTl5A5EaKEvYoLnPmAdIoRxIA77U-LYue4b4juANOeb8gR87TSjudCMgd9nKqwxTiVJgQGdr-oBFKaixh50POpTBzS9DtMzSZe4k5x71p6nF-XPrjfz3kIzyoD8uAW-F8x8r0IOPt61oQ0aml_OYMBpt0BXUYMZUsULLU7egO"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  )
}
