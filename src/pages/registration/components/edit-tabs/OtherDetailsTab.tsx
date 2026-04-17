import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const PROFESSION_TYPES = [
    "Private Practice",
    "Government Service",
    "Semi-Government / PSU",
    "Academic / Teaching",
    "Corporate / MNC",
    "NGO / Non-Profit",
    "Self Employed",
    "Retired",
    "Other",
];

export function OtherDetailsTab() {
    const { control } = useFormContext();

    return (
        <div className="space-y-6">
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Professional Details</CardTitle>
                    <CardDescription>
                        Information about the applicant's professional career and service history
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    {/* Date of Commencement */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={control} name="prof_dateOfCommencement" render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date of Commencement of Profession / Service</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) => date > new Date() || date < new Date("1950-01-01")}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Type of Profession */}
                        <FormField control={control} name="prof_typeOfProfession" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type of Profession</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select profession type" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {PROFESSION_TYPES.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Period of Residence in India */}
                    <div>
                        <p className="text-sm font-medium mb-2">Period of Residence in India</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <FormField control={control} name="prof_indiaYears" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-muted-foreground">Years</FormLabel>
                                    <FormControl>
                                        <Input type="number" min="0" max="99" placeholder="00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={control} name="prof_indiaMonths" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-muted-foreground">Months</FormLabel>
                                    <FormControl>
                                        <Input type="number" min="0" max="11" placeholder="00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                    </div>

                    {/* Period Outside India */}
                    <div>
                        <p className="text-sm font-medium mb-2">Period Outside India</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <FormField control={control} name="prof_outsideYears" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-muted-foreground">Years</FormLabel>
                                    <FormControl>
                                        <Input type="number" min="0" max="99" placeholder="00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={control} name="prof_outsideMonths" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-muted-foreground">Months</FormLabel>
                                    <FormControl>
                                        <Input type="number" min="0" max="11" placeholder="00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                    </div>

                    {/* Remarks */}
                    <FormField control={control} name="prof_remarks" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Remarks</FormLabel>
                            <FormDescription>
                                Any additional information about professional history or special circumstances
                            </FormDescription>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter any relevant remarks or notes regarding the applicant's professional details..."
                                    className="min-h-[100px] resize-y"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </CardContent>
            </Card>
        </div>
    );
}
