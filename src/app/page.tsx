import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <CoachSection />
      <CoursesSection />
      <FaqSection />
      <TestimonialSection />
      <NewsletterSection />  */}
      <Footer />
    </main>
  )
}
