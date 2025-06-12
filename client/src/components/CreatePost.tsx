
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Image, Smile } from 'lucide-react';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      // TODO: Create new post
      console.log('Creating post:', content);
      setContent('');
    }
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">U</span>
          </div>
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-none resize-none text-lg placeholder-gray-500 focus:ring-0"
              rows={3}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="text-purple-600 hover:bg-purple-50 p-2 rounded-full transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-purple-600 hover:bg-purple-50 p-2 rounded-full transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
                <button className="text-purple-600 hover:bg-purple-50 p-2 rounded-full transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <Button
                onClick={handlePost}
                disabled={!content.trim()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 rounded-full px-6"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
