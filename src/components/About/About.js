import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="dp2.jpeg" />
        </div>
        <p>
          Hi, I am Rishab Sharma, an ambitious self-taught Artificial Intelligence
          Researcher and Engineer from India. I was born and raised in the Himalayan Valley
          of Dehradun. I am presently focused in applied deep learning and actively contributing
          to the research community.
          <br />
          <br />
          I am presently working as a Data Scientist II for
          <a className="about__rkmscc-link" href="http://research.fynd.com/">
            "Fynd Research".
          </a> 
          I also enjoy doing Model Architecture Designing and Production
          pipeline designing. Since I love both programming
          and research, I love making products using deep learning.
          <br />
          <a className="about__rkmscc-link" href="http://trak.fynd.com/">
            Fynd Trak ,
          </a>
          <a className="about__rkmscc-link" href="http://erase.bg/">
           Erase BG ,
          </a>
          <a className="about__rkmscc-link" href="http://now.fynd.com/">
            Fynd Now.
          </a>
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Science is simple. Difficult is its application.“</p>
        </Quote>
        <Quote>
          <p>
            “Never look down on someone. Never look up to someone.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Deep Learning and Machine Learning is not just a tech. Its's an art.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
