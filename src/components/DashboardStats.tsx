
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardStatsProps {
  userType: 'company' | 'candidate';
  stats: {
    jobPosts?: number;
    totalApplications?: number;
    appliedJobs?: number;
  };
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ userType, stats }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {userType === 'company' ? 'Company Statistics' : 'Application Status'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userType === 'company' ? (
            <>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">Total Job Posts</p>
                <p className="text-2xl font-bold">{stats.jobPosts}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600">Total Applications</p>
                <p className="text-2xl font-bold">{stats.totalApplications}</p>
              </div>
            </>
          ) : (
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">Jobs Applied To</p>
              <p className="text-2xl font-bold">{stats.appliedJobs}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStats;
