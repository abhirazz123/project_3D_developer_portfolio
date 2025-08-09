import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  java,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mysql,
  oracle,
  spring,
  springboot,
  git,
  python,
  opencv,
  figma,
  docker,
  hostelms,
  trafficcontrol,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Java Full Stack Developer", icon: backend },
  { title: "Frontend Developer (React.js)", icon: web },
  { title: "Backend Developer (Spring Boot)", icon: backend },
  { title: "Problem Solver", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: java },
  { name: "React JS", icon: reactjs },
  { name: "MySQL", icon: mysql },
  { name: "Oracle", icon: oracle },
  { name: "Spring Framework", icon: spring },
  { name: "Spring Boot", icon: springboot },
  { name: "Git", icon: git },
  { name: "Python", icon: python },
  { name: "OpenCV", icon: opencv },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Java Full Stack Development Training",
    company_name: "Naresh I Technologies",
    icon: backend,
    iconBg: "#383E56",
    date: "Jul 2024 - Apr 2025",
    points: [
      "Completed 10-month intensive training on C, Core Java, Advanced Java, Oracle, Spring, and Spring Boot.",
      "Developed real-time projects with integrated frontend and backend solutions.",
      "Worked with JDBC, JSP, Servlets, and MySQL for full-stack application development.",
    ],
  },
  {
    title: "Hostel Management System Project",
    company_name: "Academic Project",
    icon: hostelms,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Built a responsive hostel management application with secure authentication.",
      "Implemented role-based access and dynamic room allocation features.",
      "Integrated MySQL database for efficient data storage and retrieval.",
    ],
  },
  {
    title: "Traffic Control System Project",
    company_name: "Academic Project",
    icon: trafficcontrol,
    iconBg: "#383E56",
    date: "Sep 2023 - May 2024",
    points: [
      "Designed intelligent traffic control using Python and OpenCV.",
      "Implemented vehicle counting and real-time detection functionality.",
      "Optimized performance for better accuracy and system responsiveness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhishek is a dedicated learner with strong problem-solving skills. His ability to adapt to new technologies is impressive.",
    name: "Training Mentor",
    designation: "Senior Instructor",
    company: "Naresh I Technologies",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Worked with Abhishek on a web project; his backend expertise ensured smooth and scalable solutions.",
    name: "Project Teammate",
    designation: "Full Stack Developer",
    company: "Academic Collaboration",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "Hostel Management System",
    description:
      "Web application that manages hostel operations with secure authentication, role-based access, dynamic room allocation, and MySQL database integration.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      //{ name: "JavaScript", color: "yellow-text-gradient" },
      { name: "JSP/Servlets", color: "green-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: hostelms,
    source_code_link:
      "https://github.com/abhirazz123/HostelManagementSystem-main",
  },
  {
    name: "Traffic Control System",
    description:
      "An intelligent traffic monitoring system using Python and OpenCV to detect and count vehicles in real time, enabling optimized traffic light control for smoother flow.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
    ],
    image: trafficcontrol,
    source_code_link:
      "https://github.com/abhirazz123/TrafficControlSystem", // update if repo exists
  },
  {
    name: "Core Java Programs Repository",
    description:
      "Collection of Java programs demonstrating OOP concepts, exception handling, collections, and other core Java features.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "OOP", color: "green-text-gradient" },
    ],
    image: java,
    source_code_link: "https://github.com/abhirazz123/CORE-JAVA",
  },
];

export { services, technologies, experiences, testimonials, projects };
