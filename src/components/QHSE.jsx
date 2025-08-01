import React from "react";

export default function QHSE() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative h-72 sm:h-96 w-full">
        <img
          src="/images/qhse-banner.jpg"
          alt="QHSE Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold">
            QHSE Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-xl text-gray-700 italic mb-12 max-w-3xl mx-auto">
          “Our long-term success depends on our ability to continuously improve
          our services while safeguarding our people and the environment in
          which we work.”
        </p>

        <div className="text-gray-800 space-y-5 text-base sm:text-lg leading-relaxed">
          <p>
            At <strong>Wester Oil Field Services</strong>, we are fully committed to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Satisfying our clients by understanding their needs and delivering top-tier services.</li>
            <li>Upholding high standards through rigorous adherence to Integrated Management Systems.</li>
            <li>Empowering our team with ongoing training and development.</li>
            <li>Complying with all applicable legal and regulatory requirements.</li>
            <li>Promoting environmentally responsible practices.</li>
            <li>Ensuring safe operations and preventing property damage.</li>
            <li>Protecting employees, contractors, and nearby communities from hazards.</li>
            <li>Maintaining a safe and healthy work environment.</li>
            <li>Being fully prepared for emergencies and disasters.</li>
          </ul>
          <p>
            We ensure that these policies are implemented at every level of our
            organization with the full cooperation of our management and staff.
          </p>
        </div>

        {/* Certificate Images */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Our Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["certificate1.jpg", "certificate2.jpg", "certificate3.jpg"].map((src, index) => (
              <img
                key={index}
                src={`/images/${src}`}
                alt={`Certificate ${index + 1}`}
                className="h-72 w-52 object-cover rounded-lg shadow-md hover:shadow-xl transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
