import AppConstants from "../constants/AppConstants";

export class AppUtils{
    public static generateRandomDate(): string {
        const day = Math.floor(Math.random() * (AppConstants.MAX_DAY - AppConstants.MIN_DAY + 1)) + AppConstants.MIN_DAY;
        const month = Math.floor(Math.random() * (AppConstants.MAX_MONTH - AppConstants.MIN_MONTH + 1)) + AppConstants.MIN_MONTH;
      
        const formattedDay = day.toString().padStart(2, '0');
        const formattedMonth = month.toString().padStart(2, '0');

        return `${formattedDay}/${formattedMonth}`;
    }
}