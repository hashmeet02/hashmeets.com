import React, { useState } from 'react';
import c from '../assets/skills/c.svg';
import cplus from '../assets/skills/c++.svg';
import python from '../assets/skills/python.svg';
import java from '../assets/skills/java.svg';
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import vuejs from '../assets/skills/vuejs.svg';
import typescript from '../assets/skills/typescript.svg';
import docker from '../assets/skills/docker.svg';
import nodejs from '../assets/skills/nodejs.svg';
import nextjs from '../assets/skills/nextjs.svg';
import powershell from '../assets/skills/powershell.svg';
import aws from '../assets/skills/aws.svg';
import azure from '../assets/skills/azure.svg';
import linux from '../assets/skills/linux.svg';
import bash from '../assets/skills/bash.svg';
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import tailwind from '../assets/skills/tailwind.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import jest from '../assets/skills/jest.svg';
import json from '../assets/skills/json.svg';
import mysql from '../assets/skills/mysql.svg';
import postgres from '../assets/skills/postgresql.svg';
import ssms from '../assets/skills/ssms.svg';
import mongo from '../assets/skills/mongo.svg';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import powerbi from '../assets/skills/powerbi.svg';
import swift from '../assets/skills/swift.svg';
import android from '../assets/skills/android.svg';
import laravel from '../assets/skills/laravel.svg';
import angular from '../assets/skills/angular.svg';

import { Row, Col } from 'react-bootstrap';

const Skill = ({ image, name }) => {
  const [showName, setShowName] = useState(false);

  return (
    <Col 
      md={1} 
      sm={3}
      xs={2}
      className='backdrop-blur-sm rounded-3xl text-center mx-1 my-1' 
      onMouseEnter={() => setShowName(true)} 
      onMouseLeave={() => setShowName(false)}
    >
      <img src={image} alt={name} className={`h-16 mx-auto transition-transform duration-500 sm:my-2 lg:my-10 transform origin-bottom-right ${ showName && "rotate-12"}`}/>
      <div
        className={`mt-2 text-white transition-opacity text-center duration-500 ease-in-out ${
          showName ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {name}
      </div>
    </Col>
  );
};

const Skills = () => {
  return (
    <div className='px-4 sm:px-28 mx-auto pt-10 sm:pt-28 lg:mt-28 lg:mb-36' id="toolkit">
      <h1 className='text-orange-400 text-center font-roboto font-bold text-5xl mb-5'>
        ToolKit 🔧
      </h1>
      <Row className='mx-auto justify-around'>
        <Skill image={c} name="C" />
        <Skill image={cplus} name="C++"/>
        <Skill image={python} name="Python"/>
        <Skill image={java} name="Java"/>
        <Skill image={javascript} name="JavaScript"/>
        <Skill image={react} name="React.js"/>
        <Skill image={vuejs} name="Vue.js"/>
        <Skill image={typescript} name="TypeScript"/>
        <Skill image={docker} name="Docker"/>
        <Skill image={nodejs} name="Node.js"/>
        <Skill image={nextjs} name="Next.js"/>
        <Skill image={powershell} name="Powershell"/>
        <Skill image={aws} name="AWS"/>
        <Skill image={azure} name="Azure"/>
        <Skill image={linux} name="Linux/Unix"/>
        <Skill image={bash} name="Bash"/>
        <Skill image={html} name="HTML5"/>
        <Skill image={css} name="CSS3"/>
        <Skill image={tailwind} name="Tailwind"/>
        <Skill image={bootstrap} name="BootStrap"/>
        <Skill image={jest} name="Jest"/>
        <Skill image={json} name="JSON"/>
        <Skill image={mysql} name="MySQL"/>
        <Skill image={postgres} name="PostgresSQL"/>
        <Skill image={ssms} name="SSMS"/>
        <Skill image={mongo} name="MongoDB"/>
        <Skill image={git} name="Git"/>
        <Skill image={github} name="GitHub"/>
        <Skill image={powerbi} name="PoweBi"/>
        <Skill image={swift} name="Swift"/>
        <Skill image={android} name="Android Studio"/>
        <Skill image={laravel} name="Laravel"/>
        <Skill image={angular} name="Angular"/>
      </Row>
    </div>
  );
};

export default Skills;
