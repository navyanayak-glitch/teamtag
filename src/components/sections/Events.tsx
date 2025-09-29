import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Plus, CreditCard as Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface EventsProps {
  darkMode: boolean;
}

const mockEvents = [
  {
    id: '1',
    title: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop covering fundamentals of AI and ML with practical implementations.',
    date: '2024-02-15',
    time: '14:00',
    venue: 'Engineering Building, Room 301',
    society: 'Computer Society',
    created_by: '1',
    created_at: '2024-01-20',
    image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery_images: []
  },
  {
    id: '2',
    title: '5G Technology Seminar',
    description: 'Expert talk on the latest developments in 5G technology and its applications.',
    date: '2024-02-20',
    time: '16:00',
    venue: 'Main Auditorium',
    society: 'Communication Society',
    created_by: '2',
    created_at: '2024-01-25',
    image_url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery_images: []
  },
  {
    id: '3',
    title: 'Women in Engineering Panel',
    description: 'Panel discussion with industry leaders on career opportunities and challenges for women in engineering.',
    date: '2024-02-25',
    time: '18:00',
    venue: 'Student Center, Hall A',
    society: 'WIE',
    created_by: '3',
    created_at: '2024-01-30',
    image_url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery_images: []
  },
  {
    id: '4',
    title: 'Community Tech Outreach',
    description: 'Volunteer opportunity to teach basic computer skills to underserved communities.',
    date: '2024-03-05',
    time: '10:00',
    venue: 'Community Center Downtown',
    society: 'SIGHT',
    created_by: '4',
    created_at: '2024-02-01',
    image_url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery_images: []
  }
];

export const Events: React.FC<EventsProps> = ({ darkMode }) => {
  const { user } = useAuth();
  const [events, setEvents] = useState(mockEvents);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [filter, setFilter] = useState('all');

  const canManageEvents = user && (user.role === 'admin' || user.role === 'office_bearer');

  const getSocietyColor = (society: string) => {
    switch (society) {
      case 'Computer Society':
        return 'from-blue-500 to-cyan-500';
      case 'Communication Society':
        return 'from-green-500 to-emerald-500';
      case 'WIE':
        return 'from-purple-500 to-pink-500';
      case 'SIGHT':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.society === filter);

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  return (
    <section id="events" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div className="text-center flex-1">
            <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Events
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Join us for workshops, seminars, and networking events designed to advance your technical skills and career.
            </p>
          </div>
          
          {canManageEvents && (
            <button
              onClick={() => setShowAddEvent(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Event
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-lg p-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}>
            {['all', 'Computer Society', 'Communication Society', 'WIE', 'SIGHT'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filter === filterOption
                    ? 'bg-blue-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {filterOption === 'all' ? 'All Events' : filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center`}>
              <Calendar className="w-6 h-6 mr-3 text-green-500" />
              Upcoming Events
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`group ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Society Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSocietyColor(event.society)} text-white`}>
                      {event.society}
                    </div>

                    {canManageEvents && (
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/30 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                      {event.title}
                    </h4>
                    
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.venue}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2" />
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center`}>
              <Clock className="w-6 h-6 mr-3 text-gray-500" />
              Past Events
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden opacity-75 hover:opacity-100 transition-opacity`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getSocietyColor(event.society)} text-white`}>
                      {event.society}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {event.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <button className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                      View Gallery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className={`w-16 h-16 ${darkMode ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
            <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              No events found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {filter === 'all' ? 'No events scheduled at the moment.' : `No events found for ${filter}.`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};