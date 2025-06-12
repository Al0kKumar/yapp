
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, MoreHorizontal, Send, X } from 'lucide-react';

interface Comment {
  id: string;
  user: {
    username: string;
    name: string;
    profilePic: string | null;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
  isLiked: boolean;
}

interface CommentsProps {
  postId: string;
  onClose: () => void;
}

const Comments: React.FC<CommentsProps> = ({ postId, onClose }) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: {
        username: 'commentuser1',
        name: 'Alice Johnson',
        profilePic: null
      },
      content: 'This is amazing! Thanks for sharing.',
      timestamp: '1h',
      likes: 12,
      replies: [
        {
          id: '1-1',
          user: {
            username: 'replier1',
            name: 'Bob Smith',
            profilePic: null
          },
          content: 'I totally agree with you!',
          timestamp: '45m',
          likes: 3,
          replies: [],
          isLiked: false
        }
      ],
      isLiked: true
    },
    {
      id: '2',
      user: {
        username: 'commentuser2',
        name: 'Charlie Brown',
        profilePic: null
      },
      content: 'Great post! Looking forward to more content like this.',
      timestamp: '2h',
      likes: 8,
      replies: [],
      isLiked: false
    }
  ]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      // TODO: Add comment via API
      console.log('Adding comment:', newComment, 'to post:', postId);
      setNewComment('');
    }
  };

  const handleAddReply = (commentId: string) => {
    if (replyText.trim()) {
      // TODO: Add reply via API
      console.log('Adding reply:', replyText, 'to comment:', commentId);
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const handleLikeComment = (commentId: string) => {
    // TODO: Like/unlike comment via API
    console.log('Toggle like for comment:', commentId);
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${isReply ? 'ml-12' : ''}`}>
      <div className="p-4">
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            {comment.user.profilePic ? (
              <img 
                src={comment.user.profilePic} 
                alt={comment.user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-white font-medium text-sm">
                {comment.user.name.charAt(0)}
              </span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-bold text-gray-900 text-sm">{comment.user.name}</h4>
              <span className="text-gray-500 text-sm">@{comment.user.username}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-gray-500 text-sm">{comment.timestamp}</span>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 h-8 w-8 p-0">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <p className="text-gray-900 mb-3 text-sm leading-relaxed">{comment.content}</p>
            
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors h-8 px-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{comment.replies.length > 0 ? comment.replies.length : ''}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLikeComment(comment.id)}
                className={`flex items-center space-x-2 hover:bg-red-50 transition-colors h-8 px-2 ${
                  comment.isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                }`}
              >
                <Heart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                <span className="text-xs">{comment.likes > 0 ? comment.likes : ''}</span>
              </Button>
            </div>
          </div>
        </div>
        
        {replyingTo === comment.id && (
          <div className="mt-3 ml-13 border-l-2 border-gray-200 pl-4">
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-xs">U</span>
              </div>
              <div className="flex-1">
                <Textarea
                  placeholder={`Reply to @${comment.user.username}...`}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="border border-gray-300 resize-none text-sm mb-2"
                  rows={2}
                />
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyText('');
                    }}
                    className="text-gray-500"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleAddReply(comment.id)}
                    disabled={!replyText.trim()}
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {comment.replies.map((reply) => (
          <div key={reply.id} className="mt-3">
            <CommentItem comment={reply} isReply={true} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Comments</h3>
          <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700 h-8 w-8 p-0">
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="overflow-y-auto max-h-96">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">U</span>
            </div>
            <div className="flex-1">
              <Textarea
                placeholder="Tweet your reply..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border border-gray-300 resize-none text-sm mb-3"
                rows={3}
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full px-6"
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Comments;
