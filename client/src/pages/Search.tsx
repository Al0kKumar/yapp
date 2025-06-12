
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import YappLogo from '@/components/YappLogo';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const trendingTopics = [
    { tag: '#WebDevelopment', posts: '1.2K posts' },
    { tag: '#React', posts: '856 posts' },
    { tag: '#TechNews', posts: '2.3K posts' },
    { tag: '#AI', posts: '934 posts' },
    { tag: '#Programming', posts: '1.8K posts' }
  ];

  const suggestedUsers = [
    { username: 'techguru', name: 'Alex Kumar', followers: '12.3K' },
    { username: 'designpro', name: 'Emma Wilson', followers: '8.7K' },
    { username: 'codemaster', name: 'Ryan Chen', followers: '15.2K' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <YappLogo size="medium" />
          <h1 className="text-2xl font-bold text-gray-900">Search</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search Yapp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-12 py-3 text-lg rounded-full bg-gray-100 border-0 focus:bg-white focus:ring-2 focus:ring-purple-500"
          />
          <Button
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
          >
            Search
          </Button>
        </div>

        {/* Trending */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Trending</h2>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer transition-colors">
                  <div>
                    <p className="font-medium text-purple-600">{topic.tag}</p>
                    <p className="text-sm text-gray-500">{topic.posts}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Users */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggested for you</h2>
            <div className="space-y-4">
              {suggestedUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">@{user.username} • {user.followers} followers</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Search;
