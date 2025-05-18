import {FaHome,FaUser, FaFolderOpen, FaEnvelopeOpen} from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
import skillsImg1 from './assets/skillsImg1.png';
import skillsImg2 from './assets/skillsImg2.png';
import skillsImg3 from './assets/skillsImg3.png';
import skillsImg4 from './assets/skillsImg4.png';
import skillsImg5 from './assets/skillsImg5.png';
import skillsImg6 from './assets/skillsImg6.png';
import skillsImg7 from './assets/skillsImg7.png';
import skillsImg8 from './assets/skillsImg8.png';
import skillsImg9 from './assets/skillsImg9.png';
import skillsImg10 from './assets/skillsImg10.png';

import projectImg1 from './assets/projectImg1.png';
import projectImg2 from './assets/projectImg2.jpeg';
import projectImg3 from './assets/projectImg3.jpeg';

import Theme1 from './assets/Theme1.jpg';
import Theme2 from './assets/Theme2.jpg';
import Theme3 from './assets/Theme3.jpg';
import Theme4 from './assets/Theme4.png';
import Theme5 from './assets/Theme5.jpg';
import Theme6 from './assets/Theme6.jpg';


export const links=[
    {
        name:'Home',
        icon: <FaHome className='nav-icon' />,
        path: '/',
    },
    {
        name:'About',
        icon: <FaUser className='nav-icon' />,
        path: '/about',
    },
    {
        name:'Portfolio',
        icon: <FaFolderOpen className='nav-icon' />,
        path: '/portfolio',
    },
    {
        name:'Contact',
        icon: <FaEnvelopeOpen className='nav-icon' />,
        path: '/contact',
    },
   
];


export const personalInfo = [
    {
        title: 'First Name :',
        description: 'Sadiya',
    },
    {
        title: 'Last Name :',
        description: 'Khanam',
    },
    {
        title: 'Nationality :',
        description: 'Indian',
    },
    
    {
        title: 'Email:',
        description: 'khanamsadiya1234@gmail.com',
    },

]

export const skill = [
    {
        id: 1,
        img: skillsImg1,
        title: 'HTML',
        category: 'developer',
    },
    {
        id: 2,
        img: skillsImg2,
        title: 'CSS',
        category: 'developer',
    },
    {
        id: 3,
        img: skillsImg3,
        title: 'Java',
        category: 'developer',
    },
    {
        id: 4,
        img: skillsImg4,
        title: 'springboot',
        category: 'developer',
    },
    {
        id: 5,
        img: skillsImg5,
        title: 'Javascript',
        category: 'developer',
    },
    {
        id: 6,
        img: skillsImg6,
        title: 'React',
        category: 'developer',
    },
    {
        id: 7,
        img: skillsImg7,
        title: 'Mysql',
        category: 'developer',
    },
    {
        id: 8,
        img: skillsImg8,
        title: 'Github',
        category: 'developer',
    },
    {
        id: 9,
        img: skillsImg9,
        title: 'C',
        category: 'developer',
    },

]

export const resume = [
    {
        id: 1,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year:'2024',
        title:'Master of Computer Applications   <span>   Savitribai Phule Pune University </span>',
    },
    {
        id: 2,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year:'2022',
        title:' Bachelor of Science (B.Sc.) in Mathematics  <span> Deen Dayal Upadhayay Gorakhpur University </span>',
    },
    {
        id: 3,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year:'2019',
        title:'Intermediate (Class 12)  <span> RPM Academy </span>',
    },
    {
        id: 4,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year:'2017',
        title:'High School (Class 10) <span> Hope Dyson Memorial School</span>',
    }
]

export const portfolio = [
    {
      id: 1,
      img: projectImg1,
      title: 'Campus Recruitment Portal',
      description: `Designed a Campus Recruitment Portal to streamline student job applications and recruitment management.
  
  Key Features:
  • Student Job Applications: Built an interface using Java Swing & JSP for seamless application flow.
  • Recruitment Management: Admin control over job postings and applicant tracking.
  • Role-Based Login: Secure login for students and administrators using Spring Security.
  
  Impact: Simplified campus hiring and improved recruitment efficiency.`,
      skills: [skillsImg3, skillsImg5, skillsImg1, skillsImg2, skillsImg7],
      link: 'https://github.com/your-repo/campus-recruitment-portal'
    },
    {
      id: 2,
      img: projectImg2,
      title: 'Tourism Management System',
      description: `Developed a web-based system for managing customers and destination data.
  
  Key Features:
  • Dynamic UI for data input and retrieval.
  • Trip booking system with admin and customer roles.
  • Role-Based Access Control.
  
  Impact: Enhanced service efficiency for tourism businesses.`,
      skills: [skillsImg10, skillsImg7, skillsImg1, skillsImg2, skillsImg5],
      link: 'https://github.com/your-repo/tourism-management-system'
    },
    {
      id: 3,
      img: projectImg3,
      title: 'Student Grading System',
      description: `Built with Java and Spring Boot to manage student grades.
  
  Key Features:
  • Grade entry with Thymeleaf UI.
  • Automated average calculations.
  • PDF/CSV report exports.
  • Secure role-based login system.
  
  Impact: Reduced instructor workload by automating repetitive grading tasks.`,
      skills: [skillsImg3, skillsImg4, skillsImg7, skillsImg8],
      link: 'https://github.com/your-repo/student-grading-system'
    }
  ];
  

  export const themes = [
    {
        img: Theme1,
        hue: '4',
    },
    {
        img: Theme2,
        hue: '271',
    },
    {
        img: Theme3,
        hue: '225',
    },
    {
        img: Theme4,
        hue: '339',
    },
    {
        img: Theme5,
        hue: '4',
    },
    {
        img: Theme6,
        hue: '4',
    }
  ]