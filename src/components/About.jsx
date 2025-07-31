const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Intro Banner */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/157827/oil-pump-jack-sunset-silhouette-157827.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            About Western Oil Field Services
          </h2>
          <p className="text-lg max-w-2xl font-light">
            A leading name in oil exploration, drilling, and energy solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">Our Mission</h3>
          <p className="text-gray-700">
            To provide world-class oilfield services with safety, integrity, and innovation at the core of our operations.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">Our Vision</h3>
          <p className="text-gray-700">
            To be the most reliable and sustainable oilfield service provider in the global energy sector.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Board of Directors</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {["John Smith", "Aditi Rao", "Mohammed Khan"].map((name, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${10 + i}.jpg`}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-gray-600">Director</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Milestones</h3>
        <ul className="space-y-6 border-l-4 border-yellow-500 pl-6">
          <li>
            <span className="text-yellow-600 font-semibold">2001</span> – Company founded with a vision to revolutionize oilfield services.
          </li>
          <li>
            <span className="text-yellow-600 font-semibold">2007</span> – Expanded operations to offshore drilling.
          </li>
          <li>
            <span className="text-yellow-600 font-semibold">2015</span> – Achieved ISO & OHSAS certifications.
          </li>
          <li>
            <span className="text-yellow-600 font-semibold">2022</span> – Crossed 100 successful projects globally.
          </li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Certificates</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["certificate1", "certificate2", "certificate3"].map((cert, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={`https://via.placeholder.com/400x300?text=Certificate+${i + 1}`}
                alt={`Certificate ${i + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-700 font-medium">ISO Certification {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
