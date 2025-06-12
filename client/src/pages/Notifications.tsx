import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BottomNavigation from '@/components/BottomNavigation';
import YappLogo from '@/components/YappLogo';
import { Heart, MessageCircle, UserPlus, Share } from 'lucide-react';
import axios from "axios";


const Notifications = () => {

  const [notifications,setNotifications] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  const userId = 'curruser_id';
  
  useEffect(() => {

    const fetchNotifications = async () => {

      try {
        const res = await axios.get(`api/notifications/${userId}`);
        setNotifications(res.data);
      } catch (error) {
        setNotifications([]);
      }finally{
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <YappLogo size="medium" />
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`cursor-pointer hover:shadow-md transition-shadow ${
              !notification.isRead ? 'bg-purple-50 border-purple-200' : 'bg-white'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium text-sm">
                      {notification.user.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      {getNotificationIcon(notification.type)}
                      <p className="text-sm">
                        <span className="font-medium text-gray-900">{notification.user.name}</span>
                        <span className="text-gray-600 ml-1">{notification.content}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">{notification.timestamp}</p>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mark all as read */}
        <div className="text-center">
          <Button variant="outline" className="rounded-full">
            Mark all as read
          </Button>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
