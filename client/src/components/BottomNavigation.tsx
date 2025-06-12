
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import YappLogo from './YappLogo';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      id: 'feed', 
      label: 'Feed', 
      path: '/dashboard',
      icon: (active: boolean) => (
        <svg className={`w-6 h-6 ${active ? 'fill-purple-600' : 'fill-gray-400'}`} viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      )
    },
    { 
      id: 'search', 
      label: 'Search', 
      path: '/search',
      icon: (active: boolean) => (
        <svg className={`w-6 h-6 ${active ? 'fill-purple-600' : 'fill-gray-400'}`} viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    { 
      id: 'notifications', 
      label: 'Notifications', 
      path: '/notifications',
      icon: (active: boolean) => (
        <svg className={`w-6 h-6 ${active ? 'fill-purple-600' : 'fill-gray-400'}`} viewBox="0 0 24 24">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
        </svg>
      )
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      path: '/profile',
      icon: (active: boolean) => (
        <svg className={`w-6 h-6 ${active ? 'fill-purple-600' : 'fill-gray-400'}`} viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex-1">
          <YappLogo size="small" />
        </div>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive ? 'bg-purple-50' : 'hover:bg-gray-50'
                }`}
              >
                {item.icon(isActive)}
                <span className={`text-xs font-medium ${
                  isActive ? 'text-purple-600' : 'text-gray-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
