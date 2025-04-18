
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TechStackItemProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-blue-600">{icon}</div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechStackItem
            name="Laravel 10+"
            icon={<span className="text-2xl">🔧</span>}
            description="Modern PHP framework with elegant syntax and robust features"
          />
          <TechStackItem
            name="MySQL"
            icon={<span className="text-2xl">🗄️</span>}
            description="Relational database for storing application data"
          />
          <TechStackItem
            name="Laravel Passport"
            icon={<span className="text-2xl">🔑</span>}
            description="OAuth2 server implementation for API authentication"
          />
          <TechStackItem
            name="Laravel Queues"
            icon={<span className="text-2xl">⏱️</span>}
            description="Background job processing for file uploads and notifications"
          />
          <TechStackItem
            name="Laravel Cache"
            icon={<span className="text-2xl">⚡</span>}
            description="Performance optimization for frequently accessed data"
          />
          <TechStackItem
            name="Composer"
            icon={<span className="text-2xl">📦</span>}
            description="Dependency management for PHP packages"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
