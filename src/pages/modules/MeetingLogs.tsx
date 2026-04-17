import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Download } from "lucide-react";

const meetings = [
  { id: 1, date: "2025-11-25", type: "Council Meeting", title: "Annual Council Meeting", summary: "Reviewed regulations and budget allocations", minutesUrl: "#" },
  { id: 2, date: "2025-09-10", type: "Executive Committee", title: "EC Meeting Q3", summary: "Discussed inspection schedule and staffing", minutesUrl: "#" },
  { id: 3, date: "2025-06-05", type: "TRC", title: "Technical Review Committee", summary: "Considered curriculum updates", minutesUrl: "#" },
];

const MeetingLogs = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meeting Logs</h1>
        <p className="text-muted-foreground mt-1">Archived records of past meetings, minutes, and decisions</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Past Meetings</CardTitle>
              <CardDescription>Search and view meeting minutes and summaries</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Export CSV</Button>
              <Button size="sm">New Meeting</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium">{m.date}</TableCell>
                  <TableCell>{m.type}</TableCell>
                  <TableCell>{m.title}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{m.summary}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" /> View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="mr-2 h-4 w-4" /> Minutes
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetingLogs;
