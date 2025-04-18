
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TableProps {
  name: string;
  columns: string[];
}

const Table: React.FC<TableProps> = ({ name, columns }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 text-blue-800">{name}</h3>
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {columns.map((column, index) => {
              const [name, type] = column.split(':').map(part => part.trim());
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {type}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DatabaseSchema: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Table
          name="companies"
          columns={[
            'id: bigint unsigned auto_increment primary',
            'name: string',
            'email: string unique',
            'password: string',
            'description: text nullable',
            'website: string nullable',
            'logo: string nullable',
            'created_at: timestamp',
            'updated_at: timestamp',
          ]}
        />
        <Table
          name="candidates"
          columns={[
            'id: bigint unsigned auto_increment primary',
            'name: string',
            'email: string unique',
            'password: string',
            'phone: string nullable',
            'created_at: timestamp',
            'updated_at: timestamp',
          ]}
        />
        <Table
          name="jobs"
          columns={[
            'id: bigint unsigned auto_increment primary',
            'company_id: bigint unsigned foreign',
            'title: string',
            'description: text',
            'location: string',
            'salary_range: string nullable',
            'is_remote: boolean default:false',
            'published_at: timestamp nullable',
            'created_at: timestamp',
            'updated_at: timestamp',
            'deleted_at: timestamp nullable',
          ]}
        />
        <Table
          name="applications"
          columns={[
            'id: bigint unsigned auto_increment primary',
            'job_id: bigint unsigned foreign',
            'candidate_id: bigint unsigned foreign',
            'cover_letter: text',
            'resume_path: string',
            'status: string default:pending',
            'created_at: timestamp',
            'updated_at: timestamp',
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default DatabaseSchema;
