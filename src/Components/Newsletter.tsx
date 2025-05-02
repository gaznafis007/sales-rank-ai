export default function NewsletterSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 lg:px-24">
      <div className="w-full mx-auto">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 md:p-20 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Hire Smarter?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>

          <div className="relative max-w-md mx-auto mb-4">
            <button className="bg-yellow-300 text-slate-800 font-medium py-2 px-6 rounded-full text-sm  mx-auto block">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
