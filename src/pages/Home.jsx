import logo from '../assets/images/MoonFallLogo.png';

const Home = () => {
  return (
    <div className="text-center mt-20">
      <img src={logo} alt="Moonfall Software Logo" className="mx-auto mb-6 w-48 h-auto rounded-full border-4 border-violet-400" />
      <h1 className="text-4xl font-bold text-violet-300">Welcome to MoonFall Software</h1>
      <p className="mt-4 text-lg text-gray-100">
        Creating immersive gaming experiences and innovative software solutions. Explore our latest projects and join us on our journey to the moon and beyond!
      </p>
    </div>
  );
};

export default Home;
