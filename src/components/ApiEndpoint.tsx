
import React from 'react';
import { cn } from '@/lib/utils';

interface ApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  className?: string;
}

const methodColors = {
  GET: 'bg-blue-100 text-blue-800',
  POST: 'bg-green-100 text-green-800',
  PUT: 'bg-amber-100 text-amber-800',
  DELETE: 'bg-red-100 text-red-800',
};

const ApiEndpoint: React.FC<ApiEndpointProps> = ({
  method,
  endpoint,
  description,
  className,
}) => {
  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <div className="flex items-center p-3 border-b bg-gray-50">
        <span className={cn("px-2 py-1 rounded text-xs font-bold", methodColors[method])}>
          {method}
        </span>
        <code className="ml-3 font-mono text-sm">{endpoint}</code>
      </div>
      <div className="p-3 text-sm">
        {description}
      </div>
    </div>
  );
};

export default ApiEndpoint;
