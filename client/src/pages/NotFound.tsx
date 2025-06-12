
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <YappLogo size="large" className="mx-auto" />
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 rounded-full px-8"
          >
            Go to Dashboard
          </Button>
          <br />
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="rounded-full px-8"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
