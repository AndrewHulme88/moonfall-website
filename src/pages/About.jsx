import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';

const About = () => (
  <div className="shell">
    <section className="page-intro">
      <div>
        <span className="eyebrow">About the studio</span>
        <h1 className="page-title">Curious by<br /><span className="text-[#74777e]">default.</span></h1>
      </div>
      <p className="page-copy">MoonFall Software is an independent studio in Melbourne, Australia, making games and digital products with a focus on clarity, atmosphere, and enjoyment.</p>
    </section>

    <section className="grid gap-12 border-b border-[#292b30] py-20 md:grid-cols-2 md:gap-24">
      <p className="text-3xl font-medium leading-tight tracking-[-.04em] text-[#eeeeea] md:text-5xl">Good work starts with a strong idea, and leaves out everything that does not serve it.</p>
      <div className="self-end">
        <p className="mb-7 leading-7 text-[#9b9da3]">We work across code, design, game development, and pixel art. Different mediums, same approach: make it purposeful, make it enjoyable, and pay attention to the small things.</p>
        <Link to="/games" className="text-link">See what we make <HiArrowRight /></Link>
      </div>
    </section>

    <section className="grid gap-px bg-[#292b30] my-20 border border-[#292b30] sm:grid-cols-3">
      {[['01', 'Games', 'Atmospheric, focused, and built to be played.'], ['02', 'Software', 'Useful tools with thoughtful interactions.'], ['03', 'Assets', 'Original resources for independent creators.']].map(([number, title, copy]) => (
        <div key={title} className="bg-[#0e0f12] p-8 sm:min-h-56">
          <span className="font-mono text-[11px] text-[#666970]">{number}</span>
          <h2 className="mb-3 mt-14 text-2xl font-medium text-[#eeeeea]">{title}</h2>
          <p className="text-sm leading-6 text-[#85888f]">{copy}</p>
        </div>
      ))}
    </section>
  </div>
);

export default About;
