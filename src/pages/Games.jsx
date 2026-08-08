import ProjectPage from '../components/ProjectPage';
import EliImg from '../assets/images/Eli.png';
import PongImg from '../assets/images/PongInvaders.png';

const projects = [
  {
    name: "Eli's Odyssey",
    description: 'An atmospheric 2D platformer set in a mysterious world. Follow Eli through the darkness to uncover what has been left behind.',
    link: 'https://moonfallsoftware.itch.io/elis-odyssey-brackeysjam',
    image: EliImg,
  },
  {
    name: 'Pong Invaders',
    description: 'A fast arcade collision of two classics. Defend your paddle against waves of alien invaders and chase a new high score.',
    link: 'https://moonfallsoftware.itch.io/pong-invaders',
    image: PongImg,
  },
];

const Games = () => (
  <ProjectPage
    eyebrow="Games"
    title={<>Small worlds.<br />Big atmosphere.</>}
    intro="Independent games built around strong ideas, tactile play, and the kind of details that stay with you after the screen goes dark."
    projects={projects}
    linkLabel="Play on itch.io"
  />
);

export default Games;
