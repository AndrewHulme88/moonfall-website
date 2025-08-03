const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} MoonFall Software</p>
          <p>Contact: <a href="mailto:hello@moonfall.software" className="text-blue-400 hover:underline">hello@moonfall.software</a></p>
        </div>

        <div className="flex space-x-6">
          <a href="https://instagram.com/moonfallsoftware" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Instagram
          </a>
          <a href="https://x.com/moonfallsoft" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
