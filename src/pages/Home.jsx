import logo from '../assets/images/FullLogo_Transparent.png';

const Home = () => {
  return (
    <div className="text-center mt-20">
      <img src={logo} alt="Moonfall Software Logo" className="mx-auto mb-6 w-48 h-auto" />
      <h1 className="text-4xl font-bold">Welcome to MoonFall Software</h1>
      <p className="mt-4 text-lg text-gray-600">
        We make software to help make your life more enjoyable.
      </p>
    </div>
  );
};

export default Home;
