import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faBullhorn,
  faCode,
  faComments,
  faChartLine,
  faUserGraduate,
  faBriefcase,
  faMoneyBillWave,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

export default function CoursesSection() {
  const categories = [
    { title: "Design & Development", courses: "50+ Courses Available", icon: faPaintBrush },
    { title: "Marketing", courses: "50+ Courses Available", icon: faBullhorn },
    { title: "Development", courses: "50+ Courses Available", icon: faCode },
    { title: "Communication", courses: "50+ Courses Available", icon: faComments },
    { title: "Digital Marketing", courses: "50+ Courses Available", icon: faChartLine },
    { title: "Self Development", courses: "50+ Courses Available", icon: faUserGraduate },
    { title: "Business", courses: "50+ Courses Available", icon: faBriefcase },
    { title: "Finance", courses: "50+ Courses Available", icon: faMoneyBillWave },
    { title: "Counseling", courses: "50+ Courses Available", icon: faHandsHelping },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm font-medium">
          Trusted by 2000+ companies worldwide.
        </p>
        <div className="flex justify-center space-x-8 mt-4">
          <Image src="/logoipsum-219.svg" alt="Logo 1" width={100} height={50} />
          <Image src="/logoipsum-221.svg" alt="Logo 2" width={100} height={50} />
          <Image src="/logoipsum-220.svg" alt="Logo 3" width={100} height={50} />
          <Image src="/logoipsum-215.svg" alt="Logo 4" width={100} height={50} />
          <Image src="/logoipsum-211.svg" alt="Logo 5" width={100} height={50} />
          <Image src="/logoipsum-222.svg" alt="Logo 6" width={100} height={50} />
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Explore Courses By Category</h2>
        <p className="text-gray-600 mt-2">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-4">
              <span
                className="inline-block w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={category.icon} size="lg" />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600">{category.courses}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-neutral-100 text-black rounded-lg hover:bg-blue-700">
          View All Courses
        </button>
      </div>
    </div>
  );
}
