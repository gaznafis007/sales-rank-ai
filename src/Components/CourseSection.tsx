import Image from "next/image"
import courseOne from "@/assets/our-course-one.png";
import courseTwo from "@/assets/our-course-two.png";

const courseData = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: courseOne,
  },
  {
    id: 2,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: courseTwo,
  },
]

export default function CoursesSection() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit si imperdiet et. Cras eu sit
              dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">View All</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courseData.map((course) => (
            <div key={course.id} className="bg-gray-50 rounded-md overflow-hidden">
              <div className="p-12">
                <div className="mb-4 rounded-[8px] overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={605}
                    height={380}
                    className="w-full h-[380] object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm bg-white p-2 rounded-md text-gray-600">{course.duration}</span>
                    <span className="text-sm bg-white p-2 rounded-md text-gray-600">{course.level}</span>
                  </div>
                  <span className="text-sm text-gray-600">By {course.instructor}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>

                <button className="w-full bg-blue-900 text-white py-3 rounded-sm hover:bg-blue-800 transition-colors">
                  Get it Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
