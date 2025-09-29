import React from 'react';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const achievements = [
  {
    id: '1',
    title: 'Best Student Branch Award',
    description: 'Recognized as the outstanding IEEE Student Branch in the region for exceptional activities and member engagement.',
    date: '2023-12-15',
    category: 'Branch Recognition',
    image_url: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'Executive Board'
  },
  {
    id: '2',
    title: 'Hackathon Champions',
    description: 'Our Computer Society team won first place in the National IEEE Student Hackathon with an innovative IoT solution.',
    date: '2023-11-20',
    category: 'Competition',
    image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'Computer Society'
  },
  {
    id: '3',
    title: 'Community Impact Award',
    description: 'SIGHT chapter recognized for outstanding humanitarian technology projects benefiting local communities.',
    date: '2023-10-10',
    category: 'Community Service',
    image_url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'SIGHT'
  },
  {
    id: '4',
    title: 'Research Excellence',
    description: 'Published 15 research papers in IEEE conferences and journals, showcasing student innovation.',
    date: '2023-09-05',
    category: 'Research',
    image_url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'Communication Society'
  },
  {
    id: '5',
    title: 'Women in Engineering Excellence',
    description: 'WIE chapter awarded for promoting diversity and inclusion in engineering education.',
    date: '2023-08-15',
    category: 'Diversity & Inclusion',
    image_url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'WIE'
  },
  {
    id: '6',
    title: 'Innovation Challenge Winner',
    description: 'Student team developed award-winning sustainable technology solution for smart cities.',
    date: '2023-07-20',
    category: 'Innovation',
    image_url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    society: 'Computer Society'
  }
];

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Branch Recognition':
        return <Trophy className="w-5 h-5" />;
      case 'Competition':
        return <Award className="w-5 h-5" />;
      case 'Research':
        return <Star className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Branch Recognition':
        return 'from-yellow-500 to-orange-500';
      case 'Competition':
        return 'from-blue-500 to-purple-500';
      case 'Community Service':
        return 'from-green-500 to-teal-500';
      case 'Research':
        return 'from-purple-500 to-pink-500';
      case 'Diversity & Inclusion':
        return 'from-pink-500 to-rose-500';
      case 'Innovation':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Our Achievements
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Celebrating milestones, recognitions, and the outstanding accomplishments of our IEEE Student Branch.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${getCategoryColor(achievement.category)} flex items-center justify-center text-white z-10`}>
                  {getCategoryIcon(achievement.category)}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center mb-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white mr-3`}>
                        {achievement.category}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(achievement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {achievement.title}
                    </h3>
                    
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {achievement.society}
                      </span>
                      <img
                        src={achievement.image_url}
                        alt={achievement.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>25+</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Awards Won</p>
          </div>

          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>15</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Research Papers</p>
          </div>

          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>10</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Community Projects</p>
          </div>

          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>5</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>National Rankings</p>
          </div>
        </div>
      </div>
    </section>
  );
};