
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BottomNavigation from '@/components/BottomNavigation';
import PostCard from '@/components/PostCard';
import { Settings, Edit3 } from 'lucide-react';

const Profile = () => {
  const userProfile = {
    username: 'currentuser',
    name: 'Current User',
    bio: 'Passionate developer building amazing web experiences ✨',
    profilePic: null,
    coverPic: null,
    followers: 1234,
    following: 567,
    posts: 89
  };

  const userPosts = [
    {
      id: '1',
      user: {
        username: userProfile.username,
        name: userProfile.name,
        profilePic: userProfile.profilePic
      },
      content: 'Just shipped a new feature! Building in public is such an amazing way to stay motivated and get feedback 🚀',
      timestamp: '1d',
      likes: 45,
      comments: 12,
      shares: 6,
      isLiked: false
    },
    {
      id: '2',
      user: {
        username: userProfile.username,
        name: userProfile.name,
        profilePic: userProfile.profilePic
      },
      content: 'Working on something exciting this weekend. Can\'t wait to share it with everyone! 👨‍💻',
      timestamp: '3d',
      likes: 67,
      comments: 23,
      shares: 8,
      isLiked: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600 relative">
          {userProfile.coverPic && (
            <img 
              src={userProfile.coverPic} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          )}
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-4 right-4"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Profile Info */}
        <div className="px-4 pb-4">
          <div className="relative -mt-16 mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white overflow-hidden">
              {userProfile.profilePic ? (
                <img 
                  src={userProfile.profilePic} 
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {userProfile.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <Button
              size="sm"
              variant="outline"
              className="absolute bottom-0 right-0 rounded-full"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          <div className="space-y-2 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
            <p className="text-gray-600">@{userProfile.username}</p>
            {userProfile.bio && (
              <p className="text-gray-800">{userProfile.bio}</p>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 mb-6">
            <div className="text-center">
              <p className="font-bold text-xl text-gray-900">{userProfile.posts}</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl text-gray-900">{userProfile.followers.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl text-gray-900">{userProfile.following}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4 px-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Posts</h2>
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;
