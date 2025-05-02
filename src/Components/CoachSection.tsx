import { FaThumbsUp, FaThumbsDown, FaRegClipboard, FaVolumeUp, FaArrowUp } from "react-icons/fa"
import { TfiReload } from "react-icons/tfi";
import { BsFileText, BsChatDots } from "react-icons/bs"

export default function CoachSection() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-yellow-300 mb-6 text-left font-[200]">Live AI Coach</h2>

        <div className="mb-12">
          <h3 className="text-3xl font-light">Take a Suggestion Coaching</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-lg overflow-hidden">
              <h4 className="font-medium text-gray-800 p-4">AI Sales Coach</h4>
            <div className="p-4 h-[300px] bg-gray-50 text-gray-800">
              <div className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">
                    Hello! I&apos;m your AI sales coach. How can I help you improve your sales performance today?
                  </p>
                </div>
              </div>

              
            </div>
            <div className="p-4 bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-gray-700 py-1 px-3 rounded-full">
                  How do I handle objections?
                </button>
                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-gray-700 py-1 px-3 rounded-full">
                  Give me a cold email template
                </button>
                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-gray-700 py-1 px-3 rounded-full">
                  Closing techniques
                </button>
                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-gray-700 py-1 px-3 rounded-full">
                  Negotiation tips
                </button>
              </div>
            <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                <input type="text" placeholder="Ask anything you need" className="text-gray-600 flex-1 p-3 outline-none text-sm" />
                <button className="bg-blue-900 text-white p-3 flex gap-2 items-center flex-row">
                  <p className="text-sm font-light">Send</p>
                  <FaArrowUp className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col item-center bg-white rounded-full">
              <button className="flex-1 p-3 flex justify-center items-center text-gray-500 hover:bg-gray-100">
                <TfiReload />
              </button>
              <button className="flex-1 p-3 flex justify-center items-center text-gray-500 hover:bg-gray-100">
                <FaThumbsUp />
              </button>
              <button className="flex-1 p-3 flex justify-center items-center text-gray-500 hover:bg-gray-100">
                <FaThumbsDown />
              </button>
              <button className="flex-1 p-3 flex justify-center items-center text-gray-500 hover:bg-gray-100">
                <FaRegClipboard />
              </button>
              <button className="flex-1 p-3 flex justify-center items-center text-gray-500 hover:bg-gray-100">
                <FaVolumeUp />
              </button>
            </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <h4 className="text-xl font-medium mb-4">Real-time Analysis</h4>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      Confidence Level
                    </span>
                    <span className="text-xs text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 text-sm">Confidence Level</span>
                  </div>
                  <p className="text-sm">85% improvement in objection handling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-gray-800">
              <h4 className="text-xl font-medium mb-4">Quick Actions</h4>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <BsFileText className="text-blue-900 text-xl mb-2" />
                  <span className="text-sm">Generate Script</span>
                </button>

                <button className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <BsChatDots className="text-blue-900 text-xl mb-2" />
                  <span className="text-sm">Practice Pitch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
