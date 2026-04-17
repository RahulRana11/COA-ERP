import { differenceInDays, startOfDay } from "date-fns";

export interface FeeMasterData {
  annual_base_fee: number;
  onetime_base_fee: number;
  grace_period_end_month: number;
  grace_period_end_day: number;
  restoration_fine_month: number;
  restoration_fine_day: number;
  restoration_fine_amount: number;
  second_fine_month: number;
  second_fine_day: number;
  second_fine_amount: number;
  daily_fine_start_month: number;
  daily_fine_start_day: number;
  daily_fine_amount: number;
}

export interface RenewalFeeBreakdown {
  baseFee: number;
  restorationFine: number;
  secondFine: number;
  dailyFine: number;
  daysLate: number;
  grandTotal: number;
  status: 'Active' | 'Inactive';
}

export function calculateRenewalFees(
  validityExpiryYear: number,
  currentDate: Date,
  feeMaster: FeeMasterData,
  renewalMode: 'annual' | 'onetime'
): RenewalFeeBreakdown {
  // Target year is the year AFTER the validity expires.
  const targetYear = validityExpiryYear + 1;
  const current = startOfDay(currentDate);

  // Use the explicitly provided month and day from configuration
  // Remember that JS Date months are 0-indexed (subtract 1 from stored 1-12 value)
  const graceEnd = new Date(targetYear, feeMaster.grace_period_end_month - 1, feeMaster.grace_period_end_day); 
  
  const restorationDate = new Date(targetYear, feeMaster.restoration_fine_month - 1, feeMaster.restoration_fine_day);
  
  const secondFineDate = new Date(targetYear, feeMaster.second_fine_month - 1, feeMaster.second_fine_day);
  
  const dailyFineDate = new Date(targetYear, feeMaster.daily_fine_start_month - 1, feeMaster.daily_fine_start_day);

  let baseFee = renewalMode === 'annual' 
    ? Number(feeMaster.annual_base_fee) 
    : Number(feeMaster.onetime_base_fee);

  let restorationFine = 0;
  let secondFine = 0;
  let dailyFine = 0;
  let daysLate = 0;
  let status: 'Active' | 'Inactive' = 'Active';

  // Evaluate flags based on current date
  if (current.getTime() >= restorationDate.getTime()) {
    status = 'Inactive';
    restorationFine = Number(feeMaster.restoration_fine_amount);
  }

  if (current.getTime() >= secondFineDate.getTime()) {
    secondFine = Number(feeMaster.second_fine_amount);
  }

  if (current.getTime() >= dailyFineDate.getTime()) {
    // Inclusive logic: the day it starts is day 1 of the fine
    daysLate = differenceInDays(current, dailyFineDate) + 1;
    if (daysLate > 0) {
      dailyFine = daysLate * Number(feeMaster.daily_fine_amount);
    } else {
        daysLate = 0;
    }
  }

  return {
    baseFee,
    restorationFine,
    secondFine,
    dailyFine,
    daysLate,
    grandTotal: baseFee + restorationFine + secondFine + dailyFine,
    status
  };
}
