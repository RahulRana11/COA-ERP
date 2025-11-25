import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jun", submitted: 45, approved: 32, pending: 13 },
  { month: "Jul", submitted: 52, approved: 38, pending: 14 },
  { month: "Aug", submitted: 48, approved: 41, pending: 7 },
  { month: "Sep", submitted: 61, approved: 45, pending: 16 },
  { month: "Oct", submitted: 55, approved: 48, pending: 7 },
  { month: "Nov", submitted: 67, approved: 51, pending: 16 },
];

export function ApplicationsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applications Overview (Last 6 Months)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }} 
            />
            <Legend />
            <Bar dataKey="submitted" name="Submitted" fill="hsl(217 91% 35%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="approved" name="Approved" fill="hsl(138 55% 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="pending" name="Pending" fill="hsl(38 92% 50%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
