import { useRef } from 'react';
import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';

export default function Home() {
  const ref1 = useRef();
  const scrollToPage = (type: string) => {
    const element = document.getElementById(type);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <SEO />
      <Navigation
        serviceId={'services'}
        projectId={'projects'}
        contactId={'contact'}
        teamId={'team'}
        navigateToPage={(type: string) => scrollToPage(type)}
      />
      <Greetings />
      <div id={'services'}>
        <Skills />
      </div>
      <Proficiency />
      <div id={'projects'}>
        <Education />
      </div>
      {/* <Experience /> */}
      {/* <Feedbacks /> */}
      {/* <Projects /> */}
      <div id={'contact'}>
        <Contact />
      </div>
      <div id={'team'}>
        <GithubProfileCard />
      </div>
    </div>
  );
}
