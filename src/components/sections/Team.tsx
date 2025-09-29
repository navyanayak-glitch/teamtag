import React from 'react';
import { Mail, Linkedin, Users, Award } from 'lucide-react';

interface TeamProps {
  darkMode: boolean;
}

const teamMembers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Branch Chairperson',
    society: 'Executive Board',
    bio: 'Leading the branch with vision and dedication to student development.',
    image_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sarah.johnson@university.edu',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    order: 1
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Vice Chairperson',
    society: 'Executive Board',
    bio: 'Supporting branch operations and member engagement initiatives.',
    image_url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'michael.chen@university.edu',
    linkedin: 'https://linkedin.com/in/michaelchen',
    order: 2
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Secretary',
    society: 'Executive Board',
    bio: 'Managing communications and maintaining branch records.',
    image_url: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'emily.rodriguez@university.edu',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    order: 3
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Treasurer',
    society: 'Executive Board',
    bio: 'Overseeing financial operations and budget management.',
    image_url: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'david.kim@university.edu',
    linkedin: 'https://linkedin.com/in/davidkim',
    order: 4
  },
  {
    id: '5',
    name: 'Jessica Wang',
    role: 'Computer Society Chair',
    society: 'Computer Society',
    bio: 'Leading computer science initiatives and programming workshops.',
    image_url: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'jessica.wang@university.edu',
    linkedin: 'https://linkedin.com/in/jessicawang',
    order: 5
  },
  {
    id: '6',
    name: 'Alex Thompson',
    role: 'Communications Society Chair',
    society: 'Communication Society',
    bio: 'Organizing events focused on wireless and network technologies.',
    image_url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'alex.thompson@university.edu',
    linkedin: 'https://linkedin.com/in/alexthompson',
    order: 6
  },
  {
    id: '7',
    name: 'Maria Garcia',
    role: 'WIE Chair',
    society: 'WIE',
    bio: 'Promoting women in engineering and diversity initiatives.',
    image_url: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'maria.garcia@university.edu',
    linkedin: 'https://linkedin.com/in/mariagarcia',
    order: 7
  },
  {
    id: '8',
    name: 'James Wilson',
    role: 'SIGHT Chair',
    society: 'SIGHT',
    bio: 'Leading humanitarian technology projects and community outreach.',
    image_url: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'james.wilson@university.edu',
    linkedin: 'https://linkedin.com/in/jameswilson',
    order: 8
  }
];

export const Team: React.FC<TeamProps> = ({ darkMode }) => {
  const executiveBoard = teamMembers.filter(member => member.society === 'Executive Board');
  const societyChairs = teamMembers.filter(member => member.society !== 'Executive Board');

  return (
    <section id="team" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Our Team
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Meet the dedicated leaders driving innovation and excellence in our IEEE Student Branch.
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <Award className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Executive Board
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member) => (
              <div
                key={member.id}
                className={`group ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                <div className="relative">
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Society Chairs */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <Users className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-3`} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Society Chairs
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {societyChairs.map((member) => (
              <div
                key={member.id}
                className={`group ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                <div className="relative">
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {member.name}
                  </h4>
                  <p className="text-green-600 font-medium mb-1">{member.role}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                    {member.society}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    >
                      <Mail className="w-4 h-4 text-green-600" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    >
                      <Linkedin className="w-4 h-4 text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Want to Join Our Team?
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
            We're always looking for passionate students to join our leadership team. 
            Get involved and make a difference in the IEEE community.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Apply for Leadership
          </button>
        </div>
      </div>
    </section>
  );
};