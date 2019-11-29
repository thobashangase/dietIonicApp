import { Component, OnInit } from '@angular/core';
import { AddDailyDiet } from '../models/add-daily-diet';
import { MealType } from '../models/meal-type';
import { Meal } from '../models/meal';
import { Desert } from '../models/desert';
import { DailyDietsService } from '../services/daily-diets.service';
import { MealTypesService } from '../services/meal-types.service';
import { MealsService } from '../services/meals.service';
import { DesertsService } from '../services/deserts.service';
import { AddDailyDietLine } from '../models/add-daily-diet-line';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-daily-diet',
  templateUrl: './add-daily-diet.component.html',
  styleUrls: ['./add-daily-diet.component.scss'],
})
export class AddDailyDietComponent implements OnInit {

  mealTypes: MealType[]=[];
  meals: Meal[]=[];
  deserts: Desert[]=[];
  model = new AddDailyDiet(new Date(), new AddDailyDietLine,new AddDailyDietLine, new AddDailyDietLine);

  constructor(private dailydietsservice: DailyDietsService, private mealTypesService: MealTypesService, 
    private mealsService: MealsService, private desertsService: DesertsService, private router: Router){}
  
  getMealTypes(){
    this.mealTypesService.getMealTypes().subscribe(data => {
      this.mealTypes=data;
    });
  }
  getMeals(){
    this.mealsService.getMeals().subscribe(data => {
      this.meals=data;
    });
  } 
  getDeserts(){
    this.desertsService.getDeserts().subscribe(data => {
      this.deserts=data;
    });
  }
  
  submitted = false;

  onSubmit() { 
    this.submitted = true;
  }

  addNewDailyDiet(diet: AddDailyDiet) {
    //add and navigate back to list, consider confirmation message
    this.dailydietsservice.addDailyDiet(diet).subscribe(() => {
      this.router.navigated = false;
      this.router.navigate(['/']);
    }, error => console.error(error));
    //console.log(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
    this.getMealTypes();
    this.getMeals();
    this.getDeserts();
  }

}
