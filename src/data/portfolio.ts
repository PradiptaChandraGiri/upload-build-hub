export const portfolioConfig = {
  personal: {
    name: "Pradipta Chandra Giri",
    title: "Computer Science & Engineering Student | Developer",
    tagline: "Learning. Building. Improving.",
    university: "VSSUT Burla",
    degree: "BTech in Computer Science & Engineering",
    phone: "+91-8763541464",
    email: "giripradiptachandra@gmail.com",
    location: "Burla, Odisha, India",
    bio: "Passionate Computer Science student at VSSUT Burla with a strong foundation in software development and problem-solving. I'm dedicated to creating impactful solutions that address real-world challenges, particularly in disaster management and smart systems. Currently expanding my expertise in web development, database management, and emerging technologies."
  },

  social: {
    github: "https://github.com/pradiptachandra",
    linkedin: "https://linkedin.com/in/pradiptachandragiri",
    twitter: "",
    instagram: "",
    facebook: ""
  },

  projects: [
    {
      id: 1,
      title: "DRRMS - Disaster Resource & Relief Management System",
      shortTitle: "DRRMS",
      description: "A comprehensive web application designed to manage disaster resources and relief operations efficiently. Features real-time resource tracking, automated alert systems, and an intuitive admin dashboard for emergency response coordination.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      githubLink: "https://github.com/pradiptachandra/drrms",
      liveLink: "",
      status: "Completed",
      date: "2024"
    },
    {
      id: 2,
      title: "DTLC - Digital Traffic Light Control System",
      shortTitle: "DTLC",
      description: "An intelligent traffic management system using IoT sensors and embedded systems to optimize traffic flow. Features automated signal control, emergency vehicle priority, and real-time traffic monitoring.",
      technologies: ["C++", "IoT Sensors", "Embedded Systems", "Arduino"],
      category: "IoT & Embedded Systems",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
      githubLink: "https://github.com/pradiptachandra/dtlc",
      liveLink: "",
      status: "Completed",
      date: "2024"
    },
    {
      id: 3,
      title: "DCSM - Disaster Chain Supply Management",
      shortTitle: "DCSM",
      description: "A supply chain management system specifically designed for disaster relief operations. Tracks supply distribution, manages logistics, and provides real-time updates on resource availability and delivery status.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      githubLink: "https://github.com/pradiptachandra/dcsm",
      liveLink: "",
      status: "In Progress",
      date: "2024"
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: 85, icon: "Code2" },
      { name: "C++", level: 80, icon: "FileCode" },
      { name: "C", level: 75, icon: "Terminal" },
      { name: "JavaScript", level: 82, icon: "Braces" },
      { name: "SQL", level: 78, icon: "Database" }
    ],
    web: [
      { name: "HTML5", level: 90, icon: "Globe" },
      { name: "CSS3", level: 88, icon: "Palette" },
      { name: "React.js", level: 75, icon: "Atom" },
      { name: "Node.js", level: 70, icon: "Server" },
      { name: "Express.js", level: 68, icon: "Layers" }
    ],
    database: [
      { name: "MySQL", level: 82, icon: "Database" },
      { name: "PostgreSQL", level: 75, icon: "HardDrive" },
      { name: "MongoDB", level: 72, icon: "Leaf" }
    ],
    tools: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "Github" },
      { name: "VS Code", level: 90, icon: "Code" },
      { name: "Linux", level: 70, icon: "Terminal" }
    ],
    learning: [
      { name: "TensorFlow", level: 60, icon: "Brain" },
      { name: "PyTorch", level: 55, icon: "Flame" },
      { name: "Machine Learning", level: 65, icon: "Bot" },
      { name: "Docker", level: 50, icon: "Container" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology (BTech)",
      major: "Computer Science & Engineering",
      institution: "VSSUT Burla",
      location: "Burla, Odisha, India",
      duration: "2022 - 2026 (Expected)",
      highlights: [
        "Core focus on software development and algorithms",
        "Active participation in coding competitions",
        "Member of technical clubs and societies",
        "Engaged in research projects on disaster management systems"
      ]
    }
  ],

  experience: [
    {
      title: "Student Developer",
      organization: "VSSUT Burla",
      duration: "2023 - Present",
      description: "Working on various academic and real-world projects focusing on web development, IoT systems, and disaster management solutions.",
      achievements: [
        "Developed multiple web applications for disaster management",
        "Implemented IoT-based traffic control system",
        "Collaborated with faculty on research projects"
      ]
    }
  ],

  achievements: [
    "Developed comprehensive Disaster Resource Management System",
    "Created IoT-based smart traffic control solution",
    "Active contributor to open-source projects",
    "Strong problem-solving skills demonstrated through multiple projects"
  ],

  interests: [
    "Web Development",
    "IoT & Embedded Systems",
    "Disaster Management Technology",
    "Machine Learning",
    "Open Source Contribution",
    "Algorithm Design",
    "Smart City Solutions"
  ],

  stats: [
    { label: "Projects Completed", value: 3 },
    { label: "Technologies Used", value: 15 },
    { label: "Years Learning", value: 3 },
    { label: "GitHub Repos", value: 10 }
  ]
};
