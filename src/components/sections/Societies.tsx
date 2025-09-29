import React from 'react';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import { societies } from '../../data/societies';

interface SocietiesProps {
  darkMode: boolean;
}

export const Societies: React.FC<SocietiesProps> = ({ darkMode }) => {
  return (
    <section id="societies" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Our Societies
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Specialized groups focusing on different areas of technology and engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {societies.map((society, index) => (
            <div
              key={society.id}
              className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={society.image_url}
                  alt={society.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${society.color} opacity-80`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Society Name Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{society.name}</h3>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">50+ Members</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">Monthly Events</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {society.description}
                </p>

                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} uppercase tracking-wider mb-3`}>
                    Key Activities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {society.activities.slice(0, 3).map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {activity}
                      </span>
                    ))}
                    {society.activities.length > 3 && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        +{society.activities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className={`flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group`}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Ready to Get Involved?
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
            Join one of our societies and connect with like-minded students, participate in exciting projects, 
            and advance your technical skills.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Join a Society
          </button>
        </div>
      </div>
    </section>
  );
};