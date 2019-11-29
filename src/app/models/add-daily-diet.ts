import { AddDailyDietLine } from './add-daily-diet-line';

export class AddDailyDiet {
    constructor (
        public day: Date,
        public breakfast: AddDailyDietLine,
        public lunch: AddDailyDietLine,
        public dinner: AddDailyDietLine
    ) { }
}