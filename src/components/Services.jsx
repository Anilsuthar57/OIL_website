import React from "react";
import { Wrench, Globe, ShieldCheck, Flame, Truck, Leaf } from "lucide-react";

const services = [
  {
    title: "Exploration & Drilling",
    description:
      "Advanced exploration techniques and precision drilling for efficient energy discovery.",
    icon: <Wrench size={32} className="text-yellow-400" />,
  },
  {
    title: "Global Operations",
    description:
      "Reliable oil field services across continents with proven international capabilities.",
    icon: <Globe size={32} className="text-yellow-400" />,
  },
  {
    title: "Health & Safety",
    description:
      "Top-tier safety protocols and environmental responsibility in every operation.",
    icon: <ShieldCheck size={32} className="text-yellow-400" />,
  },
  {
    title: "Refining & Processing",
    description:
      "Cutting-edge facilities delivering refined energy products with high efficiency.",
    icon: <Flame size={32} className="text-yellow-400" />,
  },
  {
    title: "Logistics & Delivery",
    description:
      "Integrated supply chain and transport solutions to ensure timely delivery.",
    icon: <Truck size={32} className="text-yellow-400" />,
  },
  {
    title: "Sustainability",
    description:
      "Innovative green practices and technologies toward a sustainable future.",
    icon: <Leaf size={32} className="text-yellow-400" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/20 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
