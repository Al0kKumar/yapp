
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import YappLogo from '@/components/YappLogo';

const ManualSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      // TODO: Send OTP to email
      console.log('Sending OTP to:', email);
      navigate('/verify-otp', { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="absolute left-4 top-4 p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex justify-center mb-4">
            <YappLogo size="medium" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Create your account</CardTitle>
          <p className="text-gray-600">Let's get you started with Yapp</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email address</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={!email}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            size="lg"
          >
            Next
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManualSignup;
