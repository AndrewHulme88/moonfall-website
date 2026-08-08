import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import EliImg from '../assets/images/Eli.png';
import CommitQuestImg from '../assets/images/CommitQuest.png';

const Home = () => (
  <div>
    <section className="shell grid min-h-[calc(100vh-72px)] content-center gap-12 border-b border-[#292b30] py-20 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
      <div>
        <h1 className="mt-6 max-w-5xl text-[clamp(3.7rem,9vw,8.5rem)] font-medium leading-[.86] tracking-[-.075em] text-[#f4f4ef]">
          Software worth <span className="text-[#e8b85a]">exploring.</span>
        </h1>
      </div>
      <div className="border-l border-[#34363c] pl-7 lg:mb-3">
        <p className="mb-8 max-w-sm leading-7 text-[#9b9da3]">MoonFall is an independent studio creating atmospheric games, useful software, and assets for other creators.</p>
        <Link to="/games" className="text-link">Explore our work <HiArrowRight /></Link>
      </div>
    </section>

    <section className="shell py-24">
      <div className="mb-10 flex items-end justify-between pb-5">
        <div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-.04em] text-[#f2f2ed] sm:text-5xl">Featured Projects</h2>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Link to="/games" className="group relative aspect-[16/10] overflow-hidden bg-black sm:aspect-video">
          <img src={EliImg} alt="Eli's Odyssey game scene" className="absolute inset-0 h-full w-full object-contain opacity-75 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
            <div><span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#e8b85a]">Games</span><h3 className="mt-2 text-3xl font-medium tracking-[-.04em]">Eli's Odyssey</h3></div>
            <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link to="/software" className="group relative aspect-[16/10] overflow-hidden bg-black sm:aspect-video">
          <img src={CommitQuestImg} alt="Commit Quest software preview" className="absolute inset-0 h-full w-full object-contain opacity-75 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
            <div><span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#e8b85a]">Software</span><h3 className="mt-2 text-3xl font-medium tracking-[-.04em]">Commit Quest</h3></div>
            <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
