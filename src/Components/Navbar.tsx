import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-16 lg:px-24 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="SalesRank.AI Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-semibold text-gray-800">SalesRank.AI</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          About
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          Pricing
        </Link>
        <Link href="/consulting" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          Consulting
        </Link>
        <Link href="/ai-coach" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          AI Coach
        </Link>
      </div>

      <div>
        <Link
          href="/get-started"
          className="text-sm font-medium text-gray-800 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Get started
        </Link>
      </div>
    </nav>
  )
}
