import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
  <footer className="mt-16 border-t border-[#292b30]">
    <div className="shell grid gap-10 py-12 sm:grid-cols-2 sm:items-end">
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#e8b85a]">Start a conversation</p>
        <a href="mailto:moonfallsoftware@outlook.com" className="text-lg text-[#ededE8] transition-colors hover:text-[#e8b85a] sm:text-2xl">
          moonfallsoftware@outlook.com
        </a>
      </div>
      <div className="flex items-end justify-between gap-6 sm:justify-end">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#676a71]">© {new Date().getFullYear()} MoonFall Software</p>
        <div className="flex gap-4 text-lg text-[#9b9da3]">
          <a href="https://instagram.com/moonfallsoftware" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#e8b85a]"><FaInstagram /></a>
          <a href="https://x.com/moonfallsoft" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-[#e8b85a]"><FaXTwitter /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
