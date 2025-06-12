
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import YappLogo from '@/components/YappLogo';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length === 6) {
      // TODO: Verify OTP
      console.log('Verifying OTP:', otp, 'for email:', email);
      navigate('/set-password', { state: { email } });
    }
  };

  const handleResend = () => {
    // TODO: Resend OTP
    console.log('Resending OTP to:', email);
  };

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
          <CardTitle className="text-2xl font-bold text-gray-900">Verify your email</CardTitle>
          <p className="text-gray-600">
            We've sent a 6-digit code to<br />
            <span className="font-medium">{email}</span>
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Verification code</label>
            <Input
              type="text"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
          
          <Button 
            onClick={handleVerify}
            disabled={otp.length !== 6}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            size="lg"
          >
            Verify
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button 
                onClick={handleResend}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Resend
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTP;
