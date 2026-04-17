import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FilterSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function FilterSheet({ open, onOpenChange }: FilterSheetProps) {
    const { control } = useFormContext();

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="mb-6">
                    <SheetTitle>Advanced Filters</SheetTitle>
                    <SheetDescription>
                        Set parameters to filter the applications. Changes apply immediately in real-time.
                    </SheetDescription>
                </SheetHeader>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Name Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter first name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter last name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="middleName"
                                render={({ field }) => (
                                    <FormItem className="col-span-2">
                                        <FormLabel>Middle Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter middle name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Application Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={control}
                                name="appNoFrom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>App No. (From)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.g. 1000" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="appNoTo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>App No. (To)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.g. 2000" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Registration Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={control}
                                name="regNoFrom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reg No. (From)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.g. CA/2020/001" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="regNoTo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reg No. (To)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.g. CA/2020/999" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Timestamps</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={control}
                                name="appDateFrom"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>App Date (From)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                    >
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="appDateTo"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>App Date (To)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                    >
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={control}
                                name="regDurationFrom"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Reg Duration (From)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                    >
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date("1900-01-01")} initialFocus />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="regDurationTo"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Reg Duration (To)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                    >
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date("1900-01-01")} initialFocus />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Toggles & Status</h4>
                        <FormField
                            control={control}
                            name="appMode"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Application Mode</FormLabel>
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Both" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Both</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Offline" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Offline</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Online" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Online</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="paymentStatus"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Payment Status</FormLabel>
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Both" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Both</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Paid" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Paid</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Unpaid" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Unpaid</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="submitStatus"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>App Submit Status</FormLabel>
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Both" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Both</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Submit to COA" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Submit to COA</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl><RadioGroupItem value="Not Submit to COA" /></FormControl>
                                                <FormLabel className="font-normal border-none p-0 mt-0">Not Submit</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="appStatus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Application Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="All">All statuses</SelectItem>
                                            <SelectItem value="Pending">Pending</SelectItem>
                                            <SelectItem value="In Review">In Review</SelectItem>
                                            <SelectItem value="Approved">Approved</SelectItem>
                                            <SelectItem value="Rejected">Rejected</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
