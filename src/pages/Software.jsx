import ProjectPage from '../components/ProjectPage';
import UnitConverterImg from '../assets/images/UnitConverterImg.png';
import RecollectoImg from '../assets/images/RecollectoIcon.png';
import CommitQuestImg from '../assets/images/CommitQuest.png';

const projects = [
  {
    name: 'Commit Quest',
    description: 'A developer companion that turns consistent coding into RPG-style progression, social leaderboards, achievements, and profiles.',
    link: 'https://commitquestdev.com',
    image: CommitQuestImg,
  },
  {
    name: 'Recollecto',
    description: 'A thoughtful daily tracker for medication, routines, and personal goals, designed around an uncomplicated mobile experience.',
    link: '#',
    image: RecollectoImg,
    contain: true,
  },
];

const Software = () => (
  <ProjectPage
    eyebrow="Software"
    title={<>Useful tools<br /><span className="text-[#74777e]">that reward you.</span></>}
    intro="Focused products built to make everyday tasks feel clearer, faster, and a little more rewarding."
    projects={projects}
  />
);

export default Software;
