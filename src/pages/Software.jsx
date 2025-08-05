const Software = () => {
  const projects = [
    {
      name: "Forget Me Note",
      description:
        "A daily task tracker with reminders and a clean mobile UI. Designed to help users stay on top of medication, routines, and personal goals.",
      link: "#", // Replace with real link later
    },
    {
      name: "Unit Converter",
      description:
        "A fast, responsive web app for converting between length, weight, temperature, area, and more. Built with React and Tailwind.",
      link: "#", // Replace with real link later
    },
  ];

  return (
    <div className="mt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Software</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {project.name}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Software;
