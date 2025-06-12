
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';

const Feed = () => {
  // Mock data for demonstration
  const posts = [
    {
      id: '1',
      user: {
        username: 'johndoe',
        name: 'John Doe',
        profilePic: null
      },
      content: 'Just built an amazing app with React and Tailwind! The modern web development stack is incredible 🚀',
      timestamp: '2h',
      likes: 24,
      comments: 8,
      shares: 3,
      isLiked: false
    },
    {
      id: '2',
      user: {
        username: 'sarahdev',
        name: 'Sarah Chen',
        profilePic: null
      },
      content: 'Coffee, code, and creativity. That\'s all I need for a perfect day ☕️💻✨',
      timestamp: '4h',
      likes: 156,
      comments: 23,
      shares: 12,
      isLiked: true
    },
    {
      id: '3',
      user: {
        username: 'techguru',
        name: 'Alex Kumar',
        profilePic: null
      },
      content: 'The future of web development is here! AI-powered tools are changing the game completely. What are your thoughts on AI in development?',
      timestamp: '6h',
      likes: 89,
      comments: 34,
      shares: 18,
      isLiked: false
    }
  ];

  return (
    <div className="space-y-4 p-4">
      <CreatePost />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
