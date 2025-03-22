
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This would normally come from a database
const mockHistoryData = [
  { id: 1, date: '2023-07-15', topic: 'Stress Management', sentiment: 'Positive', type: 'Chat' },
  { id: 2, date: '2023-07-14', topic: 'Academic Pressure', sentiment: 'Neutral', type: 'Journal' },
  { id: 3, date: '2023-07-12', topic: 'Sleep Habits', sentiment: 'Negative', type: 'Chat' },
  { id: 4, date: '2023-07-10', topic: 'Social Interaction', sentiment: 'Positive', type: 'Journal' },
  { id: 5, date: '2023-07-08', topic: 'Mindfulness Practice', sentiment: 'Positive', type: 'Chat' },
];

const JournalHistory: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Sentiment</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockHistoryData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.topic}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    entry.sentiment === 'Positive' ? 'bg-green-100 text-green-800' : 
                    entry.sentiment === 'Negative' ? 'bg-red-100 text-red-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {entry.sentiment}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    entry.type === 'Chat' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {entry.type}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalHistory;
