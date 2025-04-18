
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, features }) => {
  return (
    <Card>
      <CardHeader className="bg-blue-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
