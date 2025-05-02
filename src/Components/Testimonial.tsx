import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

export default function Testimonial() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/4">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
              &quot; They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns
              that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have
              helped us stay ahead of the competition.&quot;
            </blockquote>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-medium">Michael Kaizer</h4>
                <p className="text-sm text-gray-500">CEO of Salescamp Corp</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
              <FiArrowLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800">
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <span className="text-sm text-gray-500">01/05</span>
        </div>
      </div>
    </section>
  )
}
