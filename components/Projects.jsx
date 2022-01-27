import Link from 'next/link';
import Image from 'next/image';
import projectsStyles from '../styles/components/projects.module.css';

const Projects = () => {
    return (
        <div className={projectsStyles.sectionDKBlue}>
            <div className={projectsStyles.section} id={projectsStyles.projects}>
                <h2>Projects Im proud of</h2>
                <div className={projectsStyles.article}>
                    <div className={projectStyles.text}>
                        <h4>Latest Projects</h4>
                        <h3>Wall of Wonder</h3>
                        <p className={projectStyles.blackBox}>
                            Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere
                            in the description. A link looks like <Link href="#">this</Link>, and multiple links look <Link href="#">like this</Link> and <Link href="#">like this</Link>.
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SVG</li>
                        </ul>
                    </div>
                    <Image src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png" alt="Screenshot of the Wall of Wonder." />
                </div>

                <div className={projectsStyles.article}>
                    <div className={projectStyles.text}>
                        <h4>Bootcamp Project</h4>
                        <h3>Feed-A-Star-Mole Game</h3>
                        <p className={projectStyles.blackBox}>
                            Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere
                            in the description. A link looks like <Link href="#">this</Link>, and multiple links look <Link href="#">like this</Link> and <Link href="#">like this</Link>.
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <Image src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png" alt="Screenshot of the Wall of Wonder." />
                </div>

                <div className={projectsStyles.article}>
                    <div className={projectStyles.text}>
                        <h4>Photography Project</h4>
                        <h3>Feed-A-Star-Mole Game</h3>
                        <p className={projectStyles.blackBox}>
                            Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere
                            in the description. A link looks like <Link href="#">this</Link>, and multiple links look <Link href="#">like this</Link> and <Link href="#">like this</Link>.
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS Grid</li>
                        </ul>
                    </div>
                    <Image src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png" alt="Screenshot of the Wall of Wonder." />
                </div>
            </div>
        </div>
    );
};

export default Projects;
