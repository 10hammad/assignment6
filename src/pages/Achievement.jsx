export default function AchievementsSection() {
    return (
      <div className="bg-gray-50 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
  
       
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-800">+200</h3>
            <p className="text-gray-600 mt-2">Courses</p>
          </div>
        
          <div>
            <h3 className="text-4xl font-bold text-gray-800">50K</h3>
            <p className="text-gray-600 mt-2">Mentors</p>
          </div>
       
          <div>
            <h3 className="text-4xl font-bold text-gray-800">370k</h3>
            <p className="text-gray-600 mt-2">Students</p>
          </div>
        
          <div>
            <h3 className="text-4xl font-bold text-gray-800">100+</h3>
            <p className="text-gray-600 mt-2">Recognition</p>
          </div>
        </div>
      </div>
    );
  }
  