import { useState, useMemo } from "react";
import { format } from "date-fns";
import { calculateRenewalFees, FeeMasterData } from "@/utils/calculateRenewalFees";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Dummy FeeMaster for now to demonstrate component. 
// In a real app this would be fetched from Supabase.
const DEMO_FEE_MASTER: FeeMasterData = {
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
};

interface RenewalCheckoutDisplayProps {
  validityExpiryYear: number;
}

export function RenewalCheckoutDisplay({ validityExpiryYear = new Date().getFullYear() - 1 }: RenewalCheckoutDisplayProps) {
  const [renewalMode, setRenewalMode] = useState<"annual" | "onetime">("annual");
  
  // We use current Date for calculation
  const currentDate = new Date();

  const fees = useMemo(() => {
    return calculateRenewalFees(validityExpiryYear, currentDate, DEMO_FEE_MASTER, renewalMode);
  }, [validityExpiryYear, renewalMode, currentDate]);

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 shadow-lg">
      <CardHeader className="bg-slate-50/50 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-blue-700">Renewal Checkout</CardTitle>
            <CardDescription>
              Your registration validity expired in <strong>{validityExpiryYear}</strong>. 
              <br/>Today is {format(currentDate, "MMMM d, yyyy")}.
            </CardDescription>
          </div>
          {fees.status === 'Inactive' ? (
            <Badge variant="destructive" className="flex gap-1.5 items-center px-3 py-1">
              <AlertCircle className="w-4 h-4" />
              Restoration Required
            </Badge>
          ) : (
            <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600 flex gap-1.5 items-center px-3 py-1">
              <CheckCircle2 className="w-4 h-4" />
              Active
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Select Renewal Mode</h3>
          <RadioGroup 
            value={renewalMode} 
            onValueChange={(val) => setRenewalMode(val as "annual" | "onetime")}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="annual" id="annual" className="peer sr-only" />
              <Label
                htmlFor="annual"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <div className="mb-2 text-lg font-semibold">Annual Renewal</div>
                <div className="text-sm text-center text-muted-foreground">Valid for 1 Year</div>
                <div className="mt-4 text-2xl font-bold text-blue-600">₹{DEMO_FEE_MASTER.annual_base_fee}</div>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="onetime" id="onetime" className="peer sr-only" />
              <Label
                htmlFor="onetime"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <div className="mb-2 text-lg font-semibold">One-Time Renewal</div>
                <div className="text-sm text-center text-muted-foreground">Valid for 10 Years</div>
                <div className="mt-4 text-2xl font-bold text-blue-600">₹{DEMO_FEE_MASTER.onetime_base_fee}</div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Fee Breakdown</h3>
          
          <div className="flex justify-between items-center text-slate-700">
            <span>Base Fee ({renewalMode === 'annual' ? '1 Year' : '10 Years'})</span>
            <span className="font-medium">₹{fees.baseFee}</span>
          </div>

          {fees.restorationFine > 0 && (
            <div className="flex justify-between items-center text-amber-600">
              <span>Restoration Fine (Applied)</span>
              <span className="font-medium">₹{fees.restorationFine}</span>
            </div>
          )}

          {fees.secondFine > 0 && (
            <div className="flex justify-between items-center text-amber-600">
              <span>Late Fine (Applied)</span>
              <span className="font-medium">₹{fees.secondFine}</span>
            </div>
          )}

          {fees.dailyFine > 0 && (
            <div className="flex justify-between items-center text-red-600">
              <span>
                Daily Late Fine 
                <span className="text-xs ml-2 opacity-70">
                  ({fees.daysLate} {fees.daysLate === 1 ? 'day' : 'days'} @ ₹{DEMO_FEE_MASTER.daily_fine_amount}/day)
                </span>
              </span>
              <span className="font-medium">₹{fees.dailyFine}</span>
            </div>
          )}

          <Separator className="my-2" />
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-slate-800">Grand Total</span>
            <span className="text-2xl font-bold text-blue-700">₹{fees.grandTotal}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50/50 pt-6">
        <Button className="w-full text-lg h-12" size="lg">
          <CreditCard className="mr-2 h-5 w-5" />
          Proceed to Payment
        </Button>
      </CardFooter>
    </Card>
  );
}
