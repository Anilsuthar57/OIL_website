import React from "react";

const projects = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Cambay Asset",
    date: "12 Jan, 2021",
    description: "Provided Scraping Winch Units for oilfield support.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Cambay Asset",
    date: "08 Mar, 2021",
    description: "Hot Oil Circulation Unit successfully deployed.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "14 May, 2021",
    description: "Supplied C/H 30MT and 50MT Workover Rigs.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "03 Jul, 2021",
    description: "Manpower provided for Well Testing Jobs and Drilling Sites.",
  },
  {
    logo: "https://seeklogo.com/images/H/hermes-logo-27DB7D457B-seeklogo.com.png",
    title: "Hermes Technologies",
    date: "18 Sep, 2021",
    description: "Provided 30MT Workover Rig for field deployment.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b1/Oilmax_Energy_logo.png",
    title: "Oilmax Energy",
    date: "24 Oct, 2021",
    description: "Delivered 30MT Workover Rig for upstream operations.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Essar_Logo.svg",
    title: "Essar Oil Services",
    date: "10 Nov, 2021",
    description: "Supplied 30MT and 50MT Workover Rigs for field sites.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "12 Dec, 2021",
    description: "Provided Mobile Pumping Units for enhanced operations.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    title: "ONGC – Ahmedabad Asset",
    date: "06 Jan, 2022",
    description: "Additional Scraping Winch Units deployed on-site.",
  },
];

export default function CompletedProjects() {
  return (
    <section className="bg-white py-14 px-4 md:px-16 lg:px-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Completed Projects
        </h2>
        <p className="text-gray-500 mt-2">Trusted by major oilfield companies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm hover:shadow-md transition p-5 flex gap-4 items-start"
          >
            <img
              src={project.logo}
              alt={project.title}
              className="w-16 h-16 object-contain rounded-md border bg-white"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-700">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
