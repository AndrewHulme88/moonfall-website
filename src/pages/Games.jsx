import EliImg from '../assets/images/Eli.png';

const Games = () => {
  const projects = [
    {
      name: "Eli's Odyssey",
      description: "An atmospheric 2D platformer set in a mysterious world. Follow Eli on his journey to uncover hidden secrets and escape the darkness.",
      link: "#", // Replace with real link later
      image: EliImg,
    }

  ];

  return (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-gray-900">Our Games</h1>
    <p className="mt-4 text-gray-600">Explore our latest and upcoming game projects.</p>
  </div>
  );
};
export default Games;
