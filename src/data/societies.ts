import { Society } from '../types';

export const societies: Society[] = [
  {
    id: 'cs',
    name: 'Computer Society',
    description: 'Advancing computing technology for humanity through technical excellence, educational activities, and professional development.',
    activities: [
      'Programming Workshops',
      'Hackathons',
      'Technical Seminars',
      'Industry Visits',
      'Research Projects'
    ],
    image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'comsoc',
    name: 'Communication Society',
    description: 'Fostering technological innovation and excellence for the benefit of humanity in communications and networking.',
    activities: [
      'Wireless Communication Workshops',
      'Network Security Seminars',
      '5G Technology Sessions',
      'IoT Projects',
      'Signal Processing Labs'
    ],
    image_url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sight',
    name: 'SIGHT',
    description: 'Special Interest Group on Humanitarian Technology - applying technology for the benefit of humanity.',
    activities: [
      'Community Outreach Programs',
      'Technology for Social Good',
      'Disaster Relief Projects',
      'Educational Technology',
      'Sustainable Development'
    ],
    image_url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'wie',
    name: 'WIE (Women in Engineering)',
    description: 'Inspiring, engaging, encouraging, and empowering IEEE women members globally.',
    activities: [
      'Women Leadership Programs',
      'Mentorship Sessions',
      'Career Development Workshops',
      'STEM Outreach',
      'Networking Events'
    ],
    image_url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500'
  }
];