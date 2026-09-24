// ─────────────────────────────────────────────────────────────
// Everything on the site except projects lives in this file.
// Edit the text here, save, and the page updates.
// Projects live in src/content/projects, one Markdown file each.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Priyansh Chaurasia',
  email: 'priyansh.chaurasia62@gmail.com',

  // Put your resume at public/resume.pdf (Step 6). This link then works everywhere.
  resume: '/Priyansh_Chaurasia_Resume.pdf',

  links: {
    github: 'https://github.com/Priyanshchaurasia',
    linkedin: 'https://www.linkedin.com/in/priyanshchaurasia',
    leetcode: 'https://leetcode.com/u/PriyanshChaurasia/',
  },

  // Shown in the browser tab and in search results.
  seo: {
    title: 'Priyansh Chaurasia | Software engineer',
    description:
      'Third-year CSE-AI student at SRMIST, Chennai. Full-stack engineer who builds end to end, from REST APIs and databases to the interface, with machine learning where a product needs it. Open to internships.',
  },

  hero: {
    status: 'Open to internships', // set to '' to hide the green pill
    headline: 'I work across the stack, from the database to the screen.',
    intro:
      "Third-year CSE-AI student at SRMIST, Chennai. REST APIs and databases on one end, the screens people actually use on the other, and a machine learning model in between when the problem calls for one. Right now I'm a research intern at SRMIST.",
    photoAlt: 'Portrait of Priyansh Chaurasia',
    photoLabel: 'priyansh', // the detection label above the photo
    photoConfidence: 0.99,
  },

  // countUp: true makes the number count up when the page loads.
  stats: [
    { value: '9.58', label: 'CGPA in B.Tech CSE-AI', countUp: true },
    { value: '300+', label: 'LeetCode problems solved', countUp: true },
    { value: '2', label: 'Internships, at ONGC and SRMIST' },
    { value: '2028', label: 'Expected graduation' },
  ],

  work: {
    heading: 'Selected work',
    subtitle: 'From language processing in the browser to computer vision on the edge.',
  },

  // Newest first. current: true adds the "Now" badge and the amber dot.
  experience: [
    {
      role: 'Research Intern, Deep Learning',
      org: 'SRM Institute of Science and Technology',
      dates: 'Sep 2026 to Nov 2026',
      current: true,
      summary: 'Working on a deep learning research project under faculty guidance.',
    },
    {
      role: 'Machine Learning Intern',
      org: 'Oil and Natural Gas Corporation (ONGC)',
      dates: 'Jun 2026 to Jul 2026',
      current: false,
      summary:
        'Tasked with building an offline LLM for coding. Delivered a local assistant on DeepSeek-Coder 1.3B, served through Ollama with a streaming FastAPI backend, that answers programming questions without internet access.',
    },
  ],

  // link is optional. linkLabel sets the text of the link.
  recognition: [
    {
      category: 'Certification',
      title: 'Microsoft Certified: Fabric Data Engineer Associate',
      detail: 'Earned August 2026, valid until August 2027.',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/PriyanshChaurasia-1202/503E05AEA47C12D8?sharingId=DD6A2A70E40D8A5F',
      linkLabel: 'Verify credential',
    },
    {
      category: 'Competition',
      title: '1st prize, Bid-A-Biz',
      detail: 'E-Summit, IIT Dharwad.',
    },
    {
      category: 'Competition',
      title: 'Tata Technologies InnoVent-27',
      detail: 'Built SafeSight Edge for the AI at the Edge track on heavy-machinery operator safety.',
    },
    {
      category: 'Hackathons',
      title: 'Inter-college hackathons and ideathons',
      detail:
        'Built solutions to real problem statements under time pressure, and learned how other teams approach the same problems.',
    },
    {
      category: 'Community',
      title: 'Technical member, Next-Gen AI Club',
      detail: 'SRMIST, since August 2025.',
    },
  ],

  toolkit: {
    heading: 'Toolkit',
    subtitle: 'Everything here has been used in a project above.',
    groups: [
      { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'HTML and CSS'] },
      {
        label: 'Machine learning',
        items: ['PyTorch', 'Ultralytics YOLOv8', 'OpenCV', 'NLP', 'LLM fine-tuning', 'Ollama', 'Gradio'],
      },
      {
        label: 'Web and backend',
        items: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Spring Boot', 'WebSockets'],
      },
      {
        label: 'Data and tools',
        items: ['Microsoft Fabric', 'Git', 'GitHub Actions', 'Jest', 'Linux', 'Netlify', 'Hugging Face'],
      },
    ],
  },

  about: [
    "I enjoy taking real-world problems from an idea to a working solution. I learn fast, experiment often, and like shipping things that are useful rather than building for the sake of it. I'm a software engineer at heart, focused on building reliable systems end to end, and I bring in AI when it genuinely makes a product better. I'm always picking up new technologies along the way.",
    'Outside code, I read interesting articles and work out.',
  ],

  education: {
    degree: 'B.Tech in CSE-AI',
    school: 'SRM Institute of Science and Technology, Chennai',
    cgpa: '9.58',
    graduation: '2028',
  },

  contact: {
    heading: "Hiring an intern who ships? Let's talk.",
  },
};
