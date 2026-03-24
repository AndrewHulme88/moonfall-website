import EliImg from '../assets/images/Eli.png';

const Games = () => {
  const projects = [
    {
      name: "Eli's Odyssey",
      description: "An atmospheric 2D platformer set in a mysterious world. Follow Eli on his journey to uncover hidden secrets and escape the darkness.",
      link: "https://moonfallsoftware.itch.io/elis-odyssey-brackeysjam",
      image: EliImg,
    }

  ];

  return (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-gray-900">Our Games</h1>
    <p className="mt-4 text-gray-600">Explore our latest and upcoming game projects.</p>
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
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-md mb-4"
            />
          )}
          <a
            href={project.link}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};
export default Games;
