
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Camera } from 'lucide-react';
import YappLogo from '@/components/YappLogo';

const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state || {};
  
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    bio: '',
    profilePic: null as File | null
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePic: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    if (formData.username && formData.name) {
      // TODO: Create user account with all details
      console.log('Creating account:', { email, password, ...formData });
      navigate('/dashboard');
    }
  };

  const isValid = formData.username && formData.name;

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
          <CardTitle className="text-2xl font-bold text-gray-900">Complete your profile</CardTitle>
          <p className="text-gray-600">Tell us about yourself</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {formData.profilePic ? (
                  <img 
                    src={URL.createObjectURL(formData.profilePic)} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-1 cursor-pointer hover:bg-purple-700 transition-colors">
                <Camera className="w-3 h-3" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Username *</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">@</span>
                <Input
                  type="text"
                  placeholder="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '') })}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name *</label>
              <Input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bio (optional)</label>
              <Textarea
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="resize-none"
                maxLength={160}
              />
              <p className="text-xs text-gray-500 text-right">{formData.bio.length}/160</p>
            </div>
          </div>
          
          <Button 
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            size="lg"
          >
            Create Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
