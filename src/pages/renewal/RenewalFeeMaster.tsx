import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// The zod schema matches our DB schema
const formSchema = z.object({
  annual_base_fee: z.coerce.number().min(0, "Fee cannot be negative"),
  onetime_base_fee: z.coerce.number().min(0, "Fee cannot be negative"),
  grace_period_end_month: z.coerce.number().min(1).max(12),
  grace_period_end_day: z.coerce.number().min(1).max(31),
  restoration_fine_month: z.coerce.number().min(1).max(12),
  restoration_fine_day: z.coerce.number().min(1).max(31),
  restoration_fine_amount: z.coerce.number().min(0),
  second_fine_month: z.coerce.number().min(1).max(12),
  second_fine_day: z.coerce.number().min(1).max(31),
  second_fine_amount: z.coerce.number().min(0),
  daily_fine_start_month: z.coerce.number().min(1).max(12),
  daily_fine_start_day: z.coerce.number().min(1).max(31),
  daily_fine_amount: z.coerce.number().min(0),
});

type FormValues = z.infer<typeof formSchema>;

export default function RenewalFeeMaster() {
  const [isLoading, setIsLoading] = useState(false);

  // Default values simulating fetch from DB
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      annual_base_fee: 600,
      onetime_base_fee: 6000,
      grace_period_end_month: 3,
      grace_period_end_day: 31,
      restoration_fine_month: 4,
      restoration_fine_day: 1,
      restoration_fine_amount: 1000,
      second_fine_month: 6,
      second_fine_day: 1,
      second_fine_amount: 100,
      daily_fine_start_month: 8,
      daily_fine_start_day: 1,
      daily_fine_amount: 10,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    // Simulate Supabase UPDATE
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success("Renewal fee master updated successfully.");
    console.log("Updated fee master:", data);
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-blue-600">Renewal Fee Master</h1>
        <p className="text-muted-foreground">Manage and configure global fee structures and penalties for renewals.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Fee Configuration</CardTitle>
          <CardDescription>Adjust base fees and penalty amounts. Timelines use Month (1-12) and Day (1-31).</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Base Fees */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium border-b pb-2">Base Fees</h3>
                  
                  <FormField
                    control={form.control}
                    name="annual_base_fee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Base Fee (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="onetime_base_fee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>One-Time Base Fee (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>Valid for 10 years</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2 pt-2">
                    <FormLabel>Grace Period End Date</FormLabel>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="grace_period_end_month"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Month (1-12)" {...field} />
                            </FormControl>
                            <FormDescription>Month</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="grace_period_end_day"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Day (1-31)" {...field} />
                            </FormControl>
                            <FormDescription>Day</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Restoration & Late Fines */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium border-b pb-2">Penalties & Fines</h3>
                  
                  <div className="space-y-2">
                    <FormLabel>Restoration Fine Start Date</FormLabel>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="restoration_fine_month"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Month" {...field} />
                            </FormControl>
                            <FormDescription>Month</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="restoration_fine_day"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Day" {...field} />
                            </FormControl>
                            <FormDescription>Day</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="restoration_fine_amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Restoration Fine Amount (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2 pt-2">
                    <FormLabel>Second Fine Start Date</FormLabel>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="second_fine_month"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Month" {...field} />
                            </FormControl>
                            <FormDescription>Month</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="second_fine_day"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Day" {...field} />
                            </FormControl>
                            <FormDescription>Day</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="second_fine_amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Second Fine Amount (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2 pt-2">
                    <FormLabel>Daily Fine Start Date</FormLabel>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="daily_fine_start_month"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Month" {...field} />
                            </FormControl>
                            <FormDescription>Month</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="daily_fine_start_day"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="number" placeholder="Day" {...field} />
                            </FormControl>
                            <FormDescription>Day</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="daily_fine_amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Daily Fine Amount (₹ / Day)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Configurations"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
