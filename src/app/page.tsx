import CoachSection from "@/Components/CoachSection";
import CoursesSection from "@/Components/CourseSection";
import FaqSection from "@/Components/FaqSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200/50 to-white">
      <Navbar />
      <Hero />
      <CoachSection/>
      <CoursesSection/>
      <FaqSection/>
      <Footer />
    </main>
  )
}
