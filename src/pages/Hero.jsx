import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
        <div className="text-lg font-bold text-gray-700">Ddsgnr</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#courses" className="text-gray-600 hover:text-blue-600">Courses</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#testimonial" className="text-gray-600 hover:text-blue-600">Testimonial</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-blue-600">Login</button>
          <button className="px-4 py-2 bg-stone-950 text-white rounded hover:bg-stone-700">
            Sign Up
          </button>
        </div>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">

        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Learn new skills online with ease
          </h1>
          <p className="text-gray-600 mb-6">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-stone-950 text-white rounded hover:bg-stone-950">
              Start learning now
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              Explore Courses
            </button>
          </div>
        </div>

    
        <div className="relative">
          
           <Image src="/Capture.JPG" alt="Image description" width={400} height={400} 

            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}
