import React from 'react';
import { Download, Calendar, FileText, BookOpen, Newspaper } from 'lucide-react';

interface PublicationsProps {
  darkMode: boolean;
}

const publications = [
  {
    id: '1',
    title: 'IEEE Student Branch Newsletter - Winter 2024',
    description: 'Quarterly newsletter featuring member spotlights, upcoming events, and technical articles from our societies.',
    type: 'newsletter' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2024-01-15',
    society: 'Executive Board'
  },
  {
    id: '2',
    title: 'Advances in Machine Learning Applications',
    description: 'Research paper on novel ML algorithms for real-time data processing, published in IEEE Student Conference.',
    type: 'research' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2023-12-10',
    society: 'Computer Society'
  },
  {
    id: '3',
    title: 'TechConnect Magazine - Issue 12',
    description: 'Annual technical magazine showcasing student projects, industry insights, and career guidance.',
    type: 'magazine' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2023-11-20',
    society: 'Communication Society'
  },
  {
    id: '4',
    title: 'Sustainable Technology Solutions',
    description: 'Research compilation on humanitarian technology projects and their impact on local communities.',
    type: 'research' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2023-10-15',
    society: 'SIGHT'
  },
  {
    id: '5',
    title: 'Women in Engineering Spotlight',
    description: 'Special publication highlighting achievements and contributions of women engineers in our community.',
    type: 'magazine' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2023-09-30',
    society: 'WIE'
  },
  {
    id: '6',
    title: 'IEEE Student Branch Newsletter - Fall 2023',
    description: 'Fall edition featuring hackathon results, society updates, and upcoming conference announcements.',
    type: 'newsletter' as const,
    pdf_url: '#',
    cover_image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    published_date: '2023-09-15',
    society: 'Executive Board'
  }
];

export const Publications: React.FC<PublicationsProps> = ({ darkMode }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'newsletter':
        return <Newspaper className="w-5 h-5" />;
      case 'research':
        return <FileText className="w-5 h-5" />;
      case 'magazine':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'newsletter':
        return 'from-blue-500 to-cyan-500';
      case 'research':
        return 'from-purple-500 to-pink-500';
      case 'magazine':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'newsletter':
        return 'Newsletter';
      case 'research':
        return 'Research Paper';
      case 'magazine':
        return 'Magazine';
      default:
        return 'Publication';
    }
  };

  return (
    <section id="publications" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Publications
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Explore our newsletters, research papers, and technical magazines showcasing student innovation and achievements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-lg p-1 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
            <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium transition-colors">
              All
            </button>
            <button className={`px-6 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} font-medium transition-colors`}>
              Newsletters
            </button>
            <button className={`px-6 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} font-medium transition-colors`}>
              Research
            </button>
            <button className={`px-6 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} font-medium transition-colors`}>
              Magazines
            </button>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className={`group ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={publication.cover_image}
                  alt={publication.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(publication.type)} text-white flex items-center`}>
                  {getTypeIcon(publication.type)}
                  <span className="ml-1">{getTypeLabel(publication.type)}</span>
                </div>

                {/* Download Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {publication.society}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(publication.published_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short'
                    })}
                  </div>
                </div>

                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 line-clamp-2`}>
                  {publication.title}
                </h3>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-3`}>
                  {publication.description}
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Stay Updated
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
            Subscribe to our newsletter to receive the latest publications, research updates, 
            and technical articles directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};