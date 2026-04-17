import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useMemo } from "react";

const RECOGNIZED_QUALIFICATIONS = [
    "B.Arch (5-Year Full Time)",
    "B.Arch (Equivalent - NIT/IIT)",
    "B.Arch (Equivalent - Deemed University)",
    "B.Arch (Distance/Part-Time - Legacy)",
    "Diploma in Architecture (3.5 Year - Legacy)",
    "Diploma in Architecture (Eq. B.Arch - COA Approved)",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 60 }, (_, i) => String(currentYear - i));

export function QualificationDetailsTab() {
    const { control, watch, setValue } = useFormContext();

    // Auto-calculate 10+2 percentage
    const twelfthAggregate = watch("twelfth_aggregateMarks");
    const twelfthMaximum = watch("twelfth_maximumMarks");

    const twelfthPercentage = useMemo(() => {
        const agg = parseFloat(twelfthAggregate);
        const max = parseFloat(twelfthMaximum);
        if (!isNaN(agg) && !isNaN(max) && max > 0) {
            return ((agg / max) * 100).toFixed(2) + "%";
        }
        return "";
    }, [twelfthAggregate, twelfthMaximum]);

    return (
        <div className="space-y-6">

            {/* Architecture Degree Card */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Architecture Degree</CardTitle>
                    <CardDescription>B.Arch or equivalent recognized qualification details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={control} name="barch_recognizedFrom" render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Recognized Qualification From <span className="text-destructive">*</span></FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select qualification type" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {RECOGNIZED_QUALIFICATIONS.map(q => <SelectItem key={q} value={q}>{q}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_courseName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name of Course <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. Bachelor of Architecture" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_schoolName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name of Arch. School / Institute <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. School of Planning and Architecture, Delhi" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_universityName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name of University <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. Delhi University" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_yearOfAdmission" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year of Admission</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="max-h-56">
                                        {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_yearOfGraduation" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year of Graduation <span className="text-destructive">*</span></FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="max-h-56">
                                        {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_passingFormat" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Passing Grades Format</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Format" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CGPA">CGPA</SelectItem>
                                        <SelectItem value="Percentage">Percentage</SelectItem>
                                        <SelectItem value="Division">Division (Pass/First/Second)</SelectItem>
                                        <SelectItem value="Grade">Grade (A/B/C)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="barch_gradeAttained" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Grade / Marks Attained <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. 7.8 CGPA or 78%" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </CardContent>
            </Card>

            {/* 10+2 or Equivalent Card */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">10+2 or Equivalent Examination</CardTitle>
                    <CardDescription>Higher secondary or equivalent qualification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FormField control={control} name="twelfth_examName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name of Examination <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. CBSE 10+2 / ISC" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="twelfth_boardName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name of Board <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="e.g. CBSE, ICSE, State Board" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Mathematics Passed Radio */}
                        <FormField control={control} name="twelfth_mathsPassed" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mathematics Passed? <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="flex gap-6 pt-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <RadioGroupItem value="Yes" id="maths_yes" />
                                            <Label htmlFor="maths_yes" className="font-normal cursor-pointer">Yes</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <RadioGroupItem value="No" id="maths_no" />
                                            <Label htmlFor="maths_no" className="font-normal cursor-pointer">No</Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="twelfth_aggregateMarks" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aggregate Marks Obtained</FormLabel>
                                <FormControl><Input type="number" placeholder="e.g. 425" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="twelfth_maximumMarks" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Maximum Marks</FormLabel>
                                <FormControl><Input type="number" placeholder="e.g. 500" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Auto-calculated percentage — disabled */}
                        <FormItem>
                            <FormLabel>Percentage (%)</FormLabel>
                            <Input
                                value={twelfthPercentage}
                                disabled
                                placeholder="Auto-calculated"
                                className="bg-muted/50 font-semibold text-primary"
                            />
                            <FormDescription className="text-[11px]">
                                Auto-calculated from Aggregate ÷ Maximum × 100
                            </FormDescription>
                        </FormItem>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
