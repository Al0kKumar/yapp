
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import Comments from './Comments';

interface Post {
  id: string;
  user: {
    username: string;
    name: string;
    profilePic: string | null;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    // TODO: Handle like/unlike
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    console.log('Toggle like for post:', post.id);
  };

  const handleComment = () => {
    setShowComments(true);
    console.log('Open comments for post:', post.id);
  };

  const handleShare = () => {
    // TODO: Handle share
    console.log('Share post:', post.id);
  };

  return (
    <>
      <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              {post.user.profilePic ? (
                <img 
                  src={post.user.profilePic} 
                  alt={post.user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-medium text-sm">
                  {post.user.name.charAt(0)}
                </span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{post.user.name}</h3>
                  <span className="text-gray-500 text-sm">@{post.user.username}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{post.timestamp}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-gray-900 mb-4 leading-relaxed">{post.content}</p>
              
              <div className="flex items-center justify-between max-w-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`flex items-center space-x-2 hover:bg-red-50 transition-colors ${
                    isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm">{likes}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleComment}
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                >
                  <Share className="w-5 h-5" />
                  <span className="text-sm">{post.shares}</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {showComments && (
        <Comments 
          postId={post.id} 
          onClose={() => setShowComments(false)} 
        />
      )}
    </>
  );
};

export default PostCard;
