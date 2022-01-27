import Link from 'next/link';
import introStyles from '../styles/components/intro.module.css'

const Intro = () => {
  return (
    <div className={introStyles.section} id={introStyles.intro}>
      <p className={introStyles.name}>Hi, my name is <span>Anderson Cardoso.</span></p>
      <h2>Im a create Web Developer</h2>
      <p>I am a software engineer specialized in building beautiful UIs with smooth UX</p>
      <p>Feel free to <Link href='#'>reach out!</Link></p>
    </div>
  );
};

export default Intro;
