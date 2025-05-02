import Link from "next/link"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-200 rounded"></div>
              <span className="text-xl font-bold">Logo</span>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales
              professionals who can elevate every aspect of your business. From performance tracking and skill profiling
              to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales
              strategy and drive growth.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <FaTwitter size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <FaLinkedinIn size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <FaInstagram size={14} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Agency
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Resource
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Licence</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Copyright
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Email Address
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-sm text-gray-600">(408) 555-0120</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-gray-600">hey@domain.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm text-gray-600">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
