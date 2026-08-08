import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import logo from '../assets/images/MoonFallLogo.png';

const links = [
  ['/', 'Home'],
  ['/games', 'Games'],
  ['/software', 'Software'],
  ['/assets', 'Assets'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#292b30] bg-[#0b0c0e]/90 backdrop-blur-xl">
      <nav className="shell flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="h-9 w-9 rounded-full" />
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#f2f2ed]">MoonFall</span>
        </Link>

        <button
          className="grid h-10 w-10 place-items-center text-xl text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt4 />}
        </button>

        <div className={`${open ? 'flex' : 'hidden'} absolute left-0 top-[72px] w-full flex-col border-b border-[#292b30] bg-[#0b0c0e] p-5 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `border-b border-[#222429] px-3 py-4 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors md:border-0 md:py-2 ${isActive ? 'text-[#e8b85a]' : 'text-[#85888f] hover:text-white'}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
