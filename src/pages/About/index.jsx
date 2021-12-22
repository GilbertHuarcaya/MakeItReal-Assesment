import { useEffect } from 'react';
import Aboutme from '../../components/Aboutme';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Aboutme />;
};

export default About;
