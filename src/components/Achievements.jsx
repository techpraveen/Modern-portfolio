import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "🏆 Completed Hackathon 2023",
    description: "Participated and successfully completed a competitive hackathon.",
  },
  {
    title: "🌟 Open Source Contributor",
    description: "Contributed to various open-source projects on GitHub.",
  },
  {
    title: "🎓 CDAC Certification",
    description: "Successfully completed the CDAC DAC course in Bangalore.",
  },
  {
    title: "💻 Built a Full-Stack LMS",
    description: "Developed a Learning Management System using React & Spring Boot.",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">🎖️ My Achievements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold">{ach.title}</h2>
            <p className="text-gray-400 mt-2">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
