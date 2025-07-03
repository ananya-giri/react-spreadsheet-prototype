import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import type { ColumnDef, HeaderGroup, Row } from '@tanstack/react-table';

type RowData = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

const initialData: RowData[] = [
  {
    jobRequest: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '24-11-2024',
    estValue: '6,200,000',
  },
  {
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000',
  },
  {
    jobRequest: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000',
  },
  {
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,800,000',
  },
  {
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'High',
    dueDate: '30-01-2025',
    estValue: '2,800,000',
  },
];

const columns: ColumnDef<RowData>[] = [
  { header: 'Job Request', accessorKey: 'jobRequest' },
  { header: 'Submitted', accessorKey: 'submitted' },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: info => {
      const status = info.getValue() as string;
      const statusColors: Record<string, string> = {
        'In-process': 'bg-yellow-200 text-yellow-800',
        'Complete': 'bg-green-200 text-green-800',
        'Blocked': 'bg-red-200 text-red-800',
        'Need to start': 'bg-blue-200 text-blue-800',
      };
      const color = statusColors[status] || 'bg-gray-200 text-gray-800';
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
          {status}
        </span>
      );
    },
  },
  { header: 'Submitter', accessorKey: 'submitter' },
  {
    header: 'URL',
    accessorKey: 'url',
    cell: info => {
      const url = info.getValue() as string;
      return (
        <a href={`https://${url}`} className="text-blue-600 underline" target="_blank" rel="noreferrer">
          {url}
        </a>
      );
    },
  },
  { header: 'Assigned', accessorKey: 'assigned' },
  {
    header: 'Priority',
    accessorKey: 'priority',
    cell: info => {
      const priority = info.getValue() as string;
      const priorityColors: Record<string, string> = {
        High: 'bg-red-200 text-red-800',
        Medium: 'bg-yellow-200 text-yellow-800',
        Low: 'bg-green-200 text-green-800',
      };
      const color = priorityColors[priority] || 'bg-gray-200 text-gray-800';
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
          {priority}
        </span>
      );
    },
  },
  { header: 'Due Date', accessorKey: 'dueDate' },
  { header: 'Est. Value', accessorKey: 'estValue' },
];

const SpreadsheetTable: React.FC = () => {
  const [data] = useState(initialData);
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="overflow-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((hg: HeaderGroup<RowData>) => (
            <tr key={hg.id}>
              {hg.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left text-gray-600 font-medium"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {table.getRowModel().rows.map((row: Row<RowData>) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
