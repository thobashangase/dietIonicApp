import { Component, OnInit } from '@angular/core';
import { DailyDietsService } from '../services/daily-diets.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DailyDiet } from '../models/daily-diet';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //title = 'Let\'s CRUD';
  dailyDiets: DailyDiet[]=[];

  constructor(private dailydietsservice: DailyDietsService, private route: ActivatedRoute,
    private router: Router){ this.getDailyDiets(); }

  getDailyDiets(){
    this.dailydietsservice.getDailyDiets().subscribe(data => {
      alert('list refreshed');
      this.dailyDiets=data;
    });
  }

  addNew() {
    this.router.navigate(['/add-daily-diet']);
  }

  public delete(id: number) {
    if (confirm('Are you sure you want to delete this entry?')) {
      let index = this.dailyDiets.findIndex(x=>x.id==id);

      this.dailydietsservice.deleteDailyDiet(id).subscribe(() => {
        this.dailyDiets.splice(index, 1);
      }, error => console.error(error));
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit(){
    //this.getDailyDiets();
  }

}
