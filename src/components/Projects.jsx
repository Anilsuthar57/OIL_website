import React from "react";

const projects = [
  {
    title: "Deep Drilling in Gujarat Basin",
    client: "Reliance Industries",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Reliance_Industries_Logo.svg/2560px-Reliance_Industries_Logo.svg.png",
    status: "Ongoing",
  },
  {
    title: "Shale Oil Survey - Assam Block",
    client: "Oil India Ltd",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Oil_India_Logo.svg/1200px-Oil_India_Logo.svg.png",
    status: "Ongoing",
  },
  {
    title: "Offshore Rig Maintenance - Mumbai High",
    client: "ONGC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    status: "Completed",
  },
  {
    title: "Cross-State Pipeline Infra Project",
    client: "Indian Oil Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Indian_Oil_Logo.svg/1200px-Indian_Oil_Logo.svg.png",
    status: "Completed",
  },
];

const statusColors = {
  Ongoing: "bg-yellow-500 text-black",
  Completed: "bg-green-600 text-white",
};

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <img
                  src={project.logo}
                  alt={project.client}
                  className="h-14 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  Client: {project.client}
                </p>
                <div className="mt-auto text-center">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
