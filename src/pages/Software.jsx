import ProjectPage from '../components/ProjectPage';
import UnitConverterImg from '../assets/images/UnitConverterImg.png';
import RecordKeepImg from '../assets/images/RecordKeep.png';
import CommitQuestImg from '../assets/images/CommitQuestNew.png';

const projects = [
  {
    name: 'Commit Quest',
    description: 'A developer companion that turns consistent coding into RPG-style progression, social leaderboards, achievements, and profiles.',
    link: 'https://commitquestdev.com',
    image: CommitQuestImg,
    contain: true,
  },
  {
    name: 'Record Keep',
    description: 'Keep policies, warranties, licences, subscriptions and their supporting documents together in one private, organised space.',
    link: 'https://record-keep-iota.vercel.app/',
    image: RecordKeepImg,
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
