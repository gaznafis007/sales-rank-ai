import Image from "next/image"
import { FaShieldAlt } from "react-icons/fa"
import { BsCircleFill } from "react-icons/bs"
import headerOne from "@/assets/header-one.png";
import headerTwo from "@/assets/header-two.png";

export default function Hero() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Your AI-
            <br />
            Powered
            <br />
            Sales Coach
          </h1>

          <div className="bg-gray-50 p-6 rounded-lg max-w-md flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Image
                src={headerTwo}
                alt="AI Robot"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <FaShieldAlt className="text-blue-900 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2000+</h3>
                <p className="text-sm text-gray-600">Your protection</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-lg flex">
                <BsCircleFill className="text-blue-900 text-xs" />
                <BsCircleFill className="text-blue-900 text-xs ml-1" />
                <BsCircleFill className="text-blue-900 text-xs ml-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold">7001+</h3>
                <p className="text-sm text-gray-600">Provide tailored</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src={headerOne}
              alt="AI Robot"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-2/3 bg-white p-4 rounded-lg shadow-md">
          <div className=" flex flex-row gap-4 justify-between md:w-[300px]">
            <h3 className="text-4xl font-bold text-blue-900">721+</h3>
            <h3 className="text-4xl font-bold text-blue-900">1000+</h3>
          </div>
          <div className="mt-4 md:mt-6 md:max-w-xs">
            <h4 className="text-xl text-black font-semibold mb-4 md:mb-6">Growth is our priority.</h4>
            <p className="text-sm text-gray-600">
              As a full-service business agency, we specialize in helping companies of all sizes optimize their
              operations
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
