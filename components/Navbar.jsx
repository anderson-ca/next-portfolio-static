import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import navbarStyles from '../styles/components/navbar.module.css';


const Navbar = () => {
    return (
        <nav className={navbarStyles.nav}>
            <ul>
                <li>
                    <h1>
                        <Link href='/' passHref>
                            <a className={`${navbarStyles.a}`}>
                                <span className={`fa`}>
                                    <FaCode />
                                </span>
                            <span>Anderson Cardoso</span>
                            </a>
                        </Link>
                    </h1>
                </li>
                <li className={navbarStyles.a}>
                    <Link href='/'>
                        <a className={`${navbarStyles.a}`}>
                            Projects
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a className={`${navbarStyles.a}`}>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a className={`${navbarStyles.a}`}>
                            Contact
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className={`${navbarStyles.a}`} aria-hidden='true'>
                            <span className={`fa`}>
                                <FaGithub />
                            </span>
                            <span className='sr-only'>
                                Github
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className={`${navbarStyles.a} fa`} aria-hidden='true'>
                            <span className={`fa`}>
                                <FaLinkedin />
                            </span>
                            <span className='sr-only'>
                                LinkedIn
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className={`${navbarStyles.a} ${navbarStyles.button}`}>
                            Resume
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
