
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import YappLogo from '@/components/YappLogo';

const Landing = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth
    console.log('Google OAuth signup');
    navigate('/google-signup-details');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
    console.log('Google OAuth login');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-8">
            <YappLogo size="large" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Yapp</h1>
          <p className="text-gray-600 mb-8">Connect, share, and discover amazing content</p>
          
          <div className="space-y-4">
            <Button 
              onClick={handleGoogleSignup}
              className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm"
              size="lg"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/manual-signup')}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              size="lg"
            >
              Create new account
            </Button>
            
            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-2">Already have an account?</p>
              <div className="space-y-2">
                <Button 
                  onClick={handleGoogleLogin}
                  variant="outline"
                  className="w-full"
                >
                  Sign in with Google
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  variant="ghost"
                  className="w-full text-purple-600 hover:text-purple-700"
                >
                  Sign in manually
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Landing;
