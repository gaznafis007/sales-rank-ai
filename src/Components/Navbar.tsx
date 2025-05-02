import Link from "next/link"
import { ImStatsBars } from "react-icons/im";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-16 lg:px-24 bg-transparent">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <ImStatsBars className="text-yellow-300 w-8 h-8"/>
          </div>
          <p className="text-xl font-semibold text-gray-800">SalesRank.AI</p>
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
