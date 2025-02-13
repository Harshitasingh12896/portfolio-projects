// /src/data/assets.js
export const assets = {
  code_icon: '/assets/code-icon.png',
  code_icon_dark: '/assets/code-icon-dark.png',
  edu_icon: '/assets/edu-icon.png',
  edu_icon_dark: '/assets/edu-icon-dark.png',
  project_icon: '/assets/project-icon.png',
  project_icon_dark: '/assets/project-icon-dark.png',
  vscode: '/assets/vscode.png',
  firebase: '/assets/firebase.png',
  figma: '/assets/figma.png',
  git: '/assets/git.png',
  mongodb: '/assets/mongodb.png',
  web_icon: '/assets/web-icon.png',
  mobile_icon: '/assets/mobile-icon.png',
  ui_icon: '/assets/ui-icon.png',
  graphics_icon: '/assets/graphics-icon.png',
};



// Work Data
export const workData = [
  {
    title: 'Frontend Project',
    description: 'Web Design',
    bgImage: '/assets/work-1.png', // Ensure this path points to public/assets/work-1.png
  },
  {
    title: 'Geo-based App',
    description: 'Mobile App',
    bgImage: '/assets/work-2.png',
  },
  
  {
    title: 'Python',
    description: 'Python',
    bgImage: '/assets/pythonn.jpg',
  },
];


// Service Data
export const serviceData = [
  {
    icon: assets.web_icon, // Using icons from assets
    title: 'Web Design',
    description: 'Web development is the process of building, programming, and maintaining websites...',
    link: '#', // Add links or use '#' as a placeholder
  },
  {
    icon: assets.mobile_icon,
    title: 'Mobile App',
    description: 'Mobile app development involves creating software for mobile devices...',
    link: '#',
  },
  {
    icon: assets.ui_icon,
    title: 'Python',
    description: 'Python powers many artificial intelligence and robotics applications.',
    link: '#',
  },
  
];

// Info List
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark, // Use iconDark for dark mode
    title: 'Languages',
    description: 'HTML, CSS,Tailwind, JavaScript, Typescript, React.js, Next.js,',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'B.Tech in Electronics Communication Engineering with minor specialization',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 4 projects related to web development',
  },
];

// Tools Data
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

