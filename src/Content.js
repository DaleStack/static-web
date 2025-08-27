// import images
import Hero_person from "./assets/images/Hero/p1.png";

import flutter from "./assets/images/Skills/flutter.png";
import android from "./assets/images/Skills/android.png";
import html5 from "./assets/images/Skills/html5.png";
import uiux from "./assets/images/Skills/uiux.png";
import dart from "./assets/images/Skills/dart.png";
import laravel from "./assets/images/Skills/laravel.png";
import firebase from "./assets/images/Skills/firebase.png";
import kotlin  from "./assets/images/Skills/kotlin.png";
import nodejs  from "./assets/images/Skills/nodejs.png";
import reactjs  from "./assets/images/Skills/reactjs.png";


import services_logo1 from "./assets/images/Services/androiddev.png";
import services_logo2 from "./assets/images/Services/iosdev.png";
import services_logo3 from "./assets/images/Services/mobiledev.png";
import services_logo4 from "./assets/images/Services/webdev.png";

import project1 from "./assets/images/projects/proj1.png";
import project2 from "./assets/images/projects/proj2.png";
import project3 from "./assets/images/projects/proj3.png";
import project4 from "./assets/images/projects/proj4.png";
import project5 from "./assets/images/projects/proj5.png";
import project6 from "./assets/images/projects/proj6.png";
import person_project from "./assets/images/projects/p2.png";

import avatar1 from "./assets/images/Testimonials/testimony1.png";
import avatar2 from "./assets/images/Testimonials/testimony2.png";
import avatar3 from "./assets/images/Testimonials/testimony3.png";
import avatar4 from "./assets/images/Testimonials/testimony4.png";
import avatar5 from "./assets/images/Testimonials/testimony5.png";
import avatar6 from "./assets/images/Testimonials/testimony6.png";
import avatar7 from "./assets/images/Testimonials/testimony7.png";
import avatar8 from "./assets/images/Testimonials/testimony8.png";
import avatar9 from "./assets/images/Testimonials/testimony9.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "IT Software Engr. &",
    title2: "Mobile Developer",
    firstName: "TOM OLIVER",
    LastName: "CHUA",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Flutter",
        para: "Build cross-platform apps with a single codebase.",
        logo: flutter,
      },
      {
        name: "HTML5",
        para: "Craft modern, semantic, and responsive web pages.",
        logo: html5,
      },
      {
        name: "Android",
        para: "Develop scalable and performant mobile applications.",
        logo: android,
      },
      {
        name: "UI/UX",
        para: "Design user-friendly and engaging digital experiences.",
        logo: uiux,
      },
      {
        name: "Dart",
        para: "Power Flutter apps with fast and expressive coding.",
        logo: dart,
      },
      {
        name: "Laravel",
        para: "Build robust web apps with a clean PHP framework.",
        logo: laravel,
      },
      {
        name: "Firebase",
        para: "Integrate real-time databases, authentication, and cloud services with ease.",
        logo: firebase,
      },
      {
        name: "Kotlin",
        para: "Build modern, concise, and type-safe Android applications.",
        logo: kotlin,
      },
      {
        name: "NodeJS",
        para: "Create fast, scalable, and efficient backend applications with JavaScript.",
        logo: nodejs,
      },
      {
        name: "ReactJS",
        para: "Develop dynamic and responsive user interfaces for the web.",
        logo: reactjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Android Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "IOS Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Mobile App Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Web Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo4,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Q-VIN MOBILE APP",
        image: project1,
      },
      {
        title: "UNION DIGITAL BANK",
        image: project2,
      },
      {
        title: "STAYSAFE PH",
        image: project3,
      },
      {
        title: "CEBU PACIFIC BOOKING APP",
        image: project4,
      },
      {
        title: "GO MANILA",
        image: project5,
      },
      {
        title: "CAUYAN CITY CONNECT",
        image: project6,
      },
    ],
  },
Testimonials: {
  title: "Testimonials",
  subtitle: "MY CLIENT REVIEWS",
  testimonials_content: [
    {
      review:
        "“Tom’s Flutter expertise is impressive, but what stands out most is his passion for impactful solutions. He improved our app with both precision and creativity.”",
      img: avatar1,
      name: "Ofir Jacoby",
    },
    {
      review:
        "“Though early in his career, Tom takes direction well and quickly applies feedback. His enthusiasm and steady progress show he’ll be a strong asset to any team.”",
      img: avatar2,
      name: "Bill Schrickel",
    },
    {
      review:
        "“Tom is talented, full of ideas, and always enthusiastic in discussions. He’s eager to help and would be a valuable addition to any team.”",
      img: avatar3,
      name: "Frank Jason Guevarra",
    },
    {
      review:
        "“I worked with Tom and found him dedicated, hardworking, and highly knowledgeable in his field. His constant drive to grow and improve truly sets him apart.”",
      img: avatar4,
      name: "Nathaneal Marco Gacutan",
    },
    {
      review:
        "“I highly recommend Tom for his innovative strategies and professionalism. His contributions made a real difference and he’s a true team asset.”",
      img: avatar5,
      name: "Adrian Bacsafra",
    },
    {
      review:
        "“Tom’s leadership and vision through Certicode have been truly inspiring. His passion for empowering students and young professionals is unmatched.”",
      img: avatar6,
      name: "Chaimir Ann Boston",
    },
    {
      review:
        "“Being mentored by Tom was a rewarding experience. He simplifies complex concepts and makes learning engaging and practical.”",
      img: avatar7,
      name: "Kathleen Nava",
    },
    {
      review:
        "“Tom guided me not only in technical skills but also in leadership and discipline. His mentorship shaped both my professional and personal growth.”",
      img: avatar8,
      name: "Kimberly Español",
    },
    {
      review:
        "“His mentorship was one of the most meaningful parts of my OJT. Tom strengthened my technical foundation and inspired confidence in my career path.”",
      img: avatar9,
      name: "Justin Carl Seraspi",
    },
  ],
},
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "tomoliverchua@gmail.com",
        icon: GrMail,
        link: "mailto:tomoliverchua@gmail.com",
      },
      {
        text: "+63 949 967 3244",
        icon: MdCall,
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
