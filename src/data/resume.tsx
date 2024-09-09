import { Icons } from "@/components/icons";

export const DATA = {
  name: "Ayush Gupta",
  initials: "AG",
  url: "https://github.com/siAysuh",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
  summary:
    "As a Software Engineer, I excel in transforming innovative concepts into fully-fledged products, ready for launch. My expertise primarily lies in Python, NextJS, Node.js, and Go. With over two years of experience, I have honed my skills in delivering high-quality, scalable solutions in diverse and dynamic environments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28400861?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "C",
    "Kafka",
    "AWS"
  ],
  contact: {
    email: "siayush.gupta@gmail.com",
    social: {
      GitHub: {
        url: "https://github.com/siAyush",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/siayush/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/siAyushh",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Infogain",
      href: "https://www.infogain.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/atomic.png",
      start: "Dec 2022",
      end: "Present",
      description:
        "Successfully implemented a range of new features to enhance both application functionality and user experience. Led efforts to increase code coverage from 40% to 82% by developing comprehensive unit and integration tests, ensuring greater reliability and maintainability. Spearheaded the implementation of a micro frontend architecture, enabling modular development and seamless integration of multiple frontend applications, which improved scalability and maintainability. Collaborated closely with the frontend team to integrate APIs smoothly, ensuring optimal functionality and a consistent user experience across the application. Additionally, led the integration of Google Tag Manager (GTM) for improved tracking and analytics, and worked with AWS to deploy and scale applications efficiently.",
    },
    {
      company: "NNT",
      href: "https://www.linkedin.com/company/nggawe-nirman/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer Intern",
      logoUrl: "/atomic.png",
      start: "June 2021",
      end: "Nov 2021",
      description:
        "Worked with backend technologies like Node.js and Express to develop RESTful APIs and integrate them with frontend systems. Gained hands-on experience with version control using Git and GitHub for collaborative development. Contributed to the enhancement of existing codebases by fixing bugs."
    },
  ],

  projects: [
    {
      title: "miro",
      description: "A Drawing app",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/siAyush/miro",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "ScratchML",
      description:
        "Implementations of the Machine Learning models and algorithms from scratch using NumPy only.",
      technologies: ["Python", "NumPy"],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/siAyush/ScratchML",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Natours",
      description:
        "An tour booking web app with user authentication and authorization.",
      technologies: ["NodeJS", "ExpressJs", "MongoDB"],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/siAyush/Natours",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Model-Zoo",
      description: "Implementation of various deep learning models in Pytorch",
      technologies: ["Pytorch", "Python"],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/siAyush/Model-Zoo",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
