export default function Team() {
    const teamMembers = [
      {
        id: 1,
        name: "James Nkudu",
        position: "Marketing Coordinator",
        image: "/james.jpg", 
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
      {
        id: 2,
        name: "Joseph Munyambu",
        position: "Nursing Assistant",
        image: "/joseph.jpg",
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
      {
        id: 3,
        name: "Joseph Ngumbau",
        position: "Medical Assistant",
        image: "/josephng.jpg",
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
      {
        id: 4,
        name: "Erick Kipkemboi",
        position: "Web Designer",
        image: "/erick.jpg",
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
      {
        id: 5,
        name: "Stephen Kerubo",
        position: "President of Sales",
        image: "/stephen.jpg",
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
      {
        id: 6,
        name: "John Leboo",
        position: "Dog Trainer",
        image: "/john.jpg",
        social: { twitter: "#", linkedin: "#", github: "#" },
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.position}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  