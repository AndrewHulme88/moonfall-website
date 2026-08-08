import ProjectPage from '../components/ProjectPage';
import characterImg from '../assets/images/2DCharacter.png';

const assets = [
  {
    name: '2D Sci-fi Character',
    description: 'A fully animated pixel-art character made for metroidvanias, side-scrollers, and other science-fiction adventures.',
    link: 'https://moonfallsoftware.itch.io/2d-pixel-sci-fi-side-scroller-character',
    image: characterImg,
    contain: true,
  },
];

const Assets = () => (
  <ProjectPage
    eyebrow="Game assets"
    title={<>Ready to build<br />something new.</>}
    intro="Original, production-ready assets for independent developers who want character and atmosphere from the first frame."
    projects={assets}
    linkLabel="View asset"
  />
);

export default Assets;
