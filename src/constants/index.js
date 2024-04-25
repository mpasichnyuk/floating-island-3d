import { meta, shopify, tesla } from "../assets/images";
import dbplogo from "../assets/my-icons/dbpartners.png";
import dbooklogo from "../assets/my-icons/debtbook.png";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "Ruby on Rails",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: react,
    name: "Docker",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "PostgreSQL",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "Storybook",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitLab",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Three.js",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Software Engineer [Mid Level I]",
    company_name: "DebtBook",
    icon: dbooklogo,
    iconBg: "#accbe1",
    date: "February 2024 - March 2024",
    points: [
      "Played a significant role in developing a revolutionary web application for managing public finances, building new and enhancing existing features using React, JavaScript, Ruby on Rails, PostgreSQL, and Docker for seamless deployment and scalability.",
      "Implemented responsive and intuitive user interfaces using JavaScript and React, enhancing user experience and engagement.",
      "Collaborated with cross-functional teams to gather requirements, prioritize tasks, and deliver high-quality software solutions within deadlines ",
      "Actively participated in code reviews, debugging, and troubleshooting to maintain code quality and optimize performance ",
      "Provided technical guidance and did pair programming sessions with newer team members, fostering a collaborative and supportive work environment ",
    ],
  },
  {
    title: "Full Stack Software Engineer [Associate Level]",
    company_name: "DebtBook",
    icon: dbooklogo,
    iconBg: "#fbc3bc",
    date: "August 2022 - Feb 2024",
    points: [
      "Working as a Full-stack Developer, utilized Ruby on Rails, PostgreSQL, Docker, React, and JavaScript to build a revolutionary system for managing public finances.",
      "Wrote Ruby and JavaScript to implement full-stack features",
      "Constantly kept connected with the Product team to make sure the features built were what they needed",
      "Did pairing programming sessions with colleagues to help find bugs and implement features",
      "Helped newly hired teammates to ramp up and understand the project codebase better and faster.",
    ],
  },
  {
    title: "Frontend Developer [contract]",
    company_name: "DebtBook",
    icon: dbooklogo,
    iconBg: "#b7e4c7",
    date: "Mar 2022 - Aug 2022",
    points: [
      "In a Fintech Startup, utilized JavaScript, React, HTML, CSS, and other tools to help build a revolutionary SaaS Web App for Debt and Lease management.",
      "Successfully closed 18+ tickets in GitLab, fixing bugs and implementing features.",
      "Gained experience in Git merging, branching, rebasing, and pull requests.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "DualBoot Partners",
    icon: dbplogo,
    iconBg: "#a2d2ff",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Developed interfaces and web applications using HTML, CSS, JavaScript, React and other tools.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contacts",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mpasichnyuk",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mpasichniuk/",
  },
];

export const projects = [
  {
    iconUrl: react,
    name: "React Portfolio 2021",
    theme: "btn-back-pink",
    description:
      "Personal portfolio website from 2021 made with React, react-router, styled-components, material-ui, react hooks",

    link: "https://mpasichnyuk.github.io/",
    source: "https://github.com/mpasichnyuk/mpasichnyuk.github.io/",
  },
  // {
  //   iconUrl: react,
  //   name: "React API Fetch App",
  //   theme: "btn-back-yellow",
  //   description:
  //     "small SPA made with React+Redux, fetches data using API and shows it in cards.",
  //   link: "https://mpasichnyuk.github.io/react-alfa-test/",
  //   source: "https://mpasichnyuk.github.io/",
  // },
  {
    iconUrl: react,
    name: "Interactive React Table",
    theme: "btn-back-yellow",
    description:
      "No libs used, pure vanilla React. Class components used. Implemented filtering, pagination, column sorting from scratch.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/panda/table-react/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/table-react",
  },
  {
    iconUrl: react,
    name: "Guess the number",
    theme: "btn-back-yellow",
    description: "Mathematical exercises for small children.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/react-guess-game/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-guess-game",
  },
  {
    iconUrl: react,
    name: "Todo list (React)",
    theme: "btn-back-yellow",
    description: "Very simple todo-list made with React class components.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/react-todos/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-todos",
  },

  {
    iconUrl: css,
    name: "Animated Flex Cards",
    theme: "btn-back-pink",
    description:
      "CSS magic cards: click one and it will magically take all available screenspace",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/01-expanding-cards/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/01-expanding-cards",
  },
  {
    iconUrl: javascript,
    name: "Step Progress",
    theme: "btn-back-black",
    description: "Click button to go to next or previous steps.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/02-buttons-indicator/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/02-buttons-indicator",
  },
  {
    iconUrl: html,
    name: "Recipy Cards",
    theme: "btn-back-black",
    description: "Cards made with flexbox, arranged using CSS-Grid.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/0A-Recipy-cards/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/0A-Recipy-cards",
  },
  {
    iconUrl: javascript,
    name: "Random Choice",
    theme: "btn-back-black",
    description: "Enter your options an let the RND-fate decide!",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/13-random-choice/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/13-random-choice",
  },
  {
    iconUrl: javascript,
    name: "Perfect Project",
    theme: "btn-back-black",
    description:
      "Make your perfect project - quick, cheap and of highest quality!.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/32-cheap-checkbox/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/32-cheap-checkbox",
  },
  {
    name: "Glowing Colors",
    iconUrl: javascript,
    theme: "btn-back-black",
    description: "Hover your mouse and see for yourself!",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/36-color-hover-board/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/36-color-hover-board",
  },

  {
    iconUrl: javascript,
    name: "Notes JS",
    theme: "btn-back-black",
    description: "Note-taking list made with JavaScript.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/49-todo-list/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/49-todo-list",
  },
  {
    iconUrl: javascript,
    name: "Color Picker ",
    theme: "btn-back-black",
    description: "RGB-color choice made with JavaScript.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/panda/color-slider/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/panda/color-slider",
  },
  {
    iconUrl: html,
    name: "Fox & Bats",
    theme: "btn-back-black",
    description:
      "Very simple prototype for a 2D Zelda-style adventure game, made with GODOT engine",
    link: "https://reynmar.itch.io/fox-and-bats",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-foxnbats",
  },
  {
    iconUrl: html,
    name: "Text for Glory",
    theme: "btn-back-black",
    description:
      "Text-based adventure-RPG made with Twine engine. Russian language.",
    link: "https://reynmar.itch.io/textforglory",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-glory",
  },
  {
    iconUrl: javascript,
    name: "PICO-8 Adventure",
    theme: "btn-back-black",
    description:
      "Retro pixel-art game prototype for top-down adventure, made with PICO-8 engine.",
    link: "https://reynmar.itch.io/micro-adventure-beta",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/game-pico-adventure",
  },
  {
    iconUrl: react,
    name: "Flash Cards",
    theme: "btn-back-yellow",
    description: "Educational project, made with React class components.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/react-flashcards/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/react-flashcards",
  },

  {
    iconUrl: javascript,
    name: "Nav menu for seals!",
    theme: "btn-back-blue",
    description:
      "That navigation menu is like a seal - they both love to rest on their side.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/03-rotating_navigation/index.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/03-rotating_navigation",
  },
  {
    iconUrl: css,
    name: "Stories Cards",
    theme: "btn-back-black",
    description: "Micro pages, to be used as Stories in a Mobile App.",
    link: "https://mpasichnyuk.github.io/Portfolio-projects/tinkoff/tinkoff.html",
    source:
      "https://github.com/mpasichnyuk/Portfolio-projects/tree/master/tinkoff",
  },
];
