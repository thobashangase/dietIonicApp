import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { HomePage } from './home/home.page';
import { AddDailyDietComponent } from './add-daily-diet/add-daily-diet.component';
import { DietDetailsComponent } from './diet-details/diet-details.component';

const appRoutes: Routes = [
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: AppComponent//,
    //data: { title: 'Heroes List' }
  },
  {
    path: 'add-daily-diet',
    component: AddDailyDietComponent
  },
  {
    path: 'diet-details/:id',
    component: DietDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
  //,
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, AddDailyDietComponent, DietDetailsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
