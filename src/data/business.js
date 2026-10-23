import { Layout, Code2, Database, ShieldCheck } from 'lucide-react'

export const business = {
  name: 'Syntrix',
  tagline: 'Where Technology Meets Innovation. We turn manual processes into organized and efficient digital systems.',
  contact: {
    email: 'hello@syntrix.com',
    phone: '+63 917 123 4567',
    address: 'Manila, PH',
  },
}

export const overview = {
  problem:
    'We turn manual, time-consuming, and disconnected processes into organized and efficient digital systems.',
  highlights: [
    { id: 'understand', text: 'We start by learning how your team works today.' },
    { id: 'design', text: 'We design every screen around the people who will use it.' },
    { id: 'automate', text: 'We automate repetitive work and keep your records organized.' },
    { id: 'test', text: 'We test everything before launch so it works on day one.' },
    { id: 'support', text: 'We stay after launch for updates, fixes, and support.' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'projects', label: 'Projects', to: '/projects' },
  { id: 'about', label: 'About', to: '/about' },
]

export const services = [
  {
    id: 'web-systems',
    icon: Layout,
    title: 'Web-Based System Development',
    description:
      'We replace spreadsheets, paper forms, and scattered tools with one browser-based system your whole team can log in to, with clear roles and a record of every change.',
    features: ['Custom Admin Dashboards', 'Role-Based Permissions', 'Real-time Activity Logging'],
  },
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Software shaped around how your business already works, not a generic template you have to bend your process to fit.',
    features: ['Tailored Business Logic', 'Third-party API Integration', 'Scalable Microservice Architecture'],
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Management Systems',
    description:
      'Structured, searchable records that stay accurate and secure, so the information you need is one search away instead of buried in folders.',
    features: ['Automated Data Backups', 'High-Performance Indexing', 'Disaster Recovery Setup'],
  },
  {
    id: 'maintenance',
    icon: ShieldCheck,
    title: 'System Maintenance & Support',
    description:
      'Launch is not the finish line. We monitor, update, and improve your system so it keeps running smoothly as your business grows.',
    features: ['24/7 Uptime Monitoring', 'Automated Patch Updates', 'Dedicated SLA Helpdesk'],
  },
]

export const stats = [
  { id: 'clients', value: '50+', label: 'Satisfied clients' },
  { id: 'systems', value: '70+', label: 'Projects delivered' },
  { id: 'uptime', value: '99.9%', label: 'Average uptime' },
  { id: 'years', value: '3+', label: 'Years of experience' },
]

export const mission = {
  title: 'The purpose behind our work',
  description:
    'Our mission is to turn ideas into powerful digital solutions. We create innovative, reliable, and user-friendly websites and systems that help businesses, organizations, and professionals work smarter, connect better, and grow in the digital world.',
}

export const vision = {
  title: 'The future we envision',
  description:
    'To become a leading and trusted digital solutions provider that turns ideas into innovative, reliable, and user-centered websites and systems, empowering businesses and organizations to grow, improve their operations, and succeed in an increasingly digital world.',
}

export const coreValues = [
  { id: 'quality', title: 'Quality', text: 'We create reliable, functional, and well-designed digital solutions.' },
  { id: 'innovation', title: 'Innovation', text: 'We use creativity and technology to develop better solutions.' },
  { id: 'commitment', title: 'Commitment', text: 'We stay dedicated to our clients from development to ongoing support.' },
]

// --- replace each '#' with the person's real profile URL (e.g. 'https://www.linkedin.com/in/your-name') ---
export const team = [
  { id: 'christian', name: 'Christian Juan', role: 'Web Developer', linkedin: '#', github: '#' },
  { id: 'chelsea', name: 'Chelsea Alcantara', role: 'Web Developer', linkedin: '#', github: '#' },
  { id: 'jeffrey', name: 'Jeffrey Bautista', role: 'Web Developer', linkedin: '#', github: '#' },
]
