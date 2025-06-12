
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import YappLogo from '@/components/YappLogo';

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [credentials, setCredentials] = useState({
    emailOrUsername: '',
    password: ''
  });

  const handleNext = () => {
    if (credentials.emailOrUsername) {
      setStep(2);
    }
  };

  const handleLogin = () => {
    if (credentials.password) {
      // TODO: Authenticate user
      console.log('Logging in:', credentials);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => step === 1 ? navigate('/') : setStep(1)}
            className="absolute left-4 top-4 p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex justify-center mb-4">
            <YappLogo size="medium" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Welcome back' : 'Enter your password'}
          </CardTitle>
          <p className="text-gray-600">
            {step === 1 ? 'Sign in to your account' : `Signing in as ${credentials.emailOrUsername}`}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email or username</label>
                <Input
                  type="text"
                  placeholder="Enter email or @username"
                  value={credentials.emailOrUsername}
                  onChange={(e) => setCredentials({ ...credentials, emailOrUsername: e.target.value })}
                  className="w-full"
                />
              </div>
              
              <Button 
                onClick={handleNext}
                disabled={!credentials.emailOrUsername}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                size="lg"
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full"
                />
              </div>
              
              <Button 
                onClick={handleLogin}
                disabled={!credentials.password}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                size="lg"
              >
                Sign In
              </Button>
              
              <div className="text-center">
                <button className="text-sm text-purple-600 hover:text-purple-700">
                  Forgot password?
                </button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
