
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import YappLogo from '@/components/YappLogo';

const SetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (password && password === confirmPassword && password.length >= 8) {
      navigate('/user-details', { state: { email, password } });
    }
  };

  const isValid = password && password === confirmPassword && password.length >= 8;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex justify-center mb-4">
            <YappLogo size="medium" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Set your password</CardTitle>
          <p className="text-gray-600">Create a strong password for your account</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Confirm password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 space-y-1">
            <p className={`${password.length >= 8 ? 'text-green-600' : ''}`}>
              • At least 8 characters
            </p>
            <p className={`${password === confirmPassword && password ? 'text-green-600' : ''}`}>
              • Passwords match
            </p>
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={!isValid}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            size="lg"
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetPassword;
