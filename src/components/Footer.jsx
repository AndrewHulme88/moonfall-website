import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} MoonFall Software</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:moonfallsoftware@outlook.com"
              className="text-blue-400 hover:underline"
            >
              moonfallsoftware@outlook.com
            </a>
          </p>
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://instagram.com/moonfallsoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/moonfallsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
