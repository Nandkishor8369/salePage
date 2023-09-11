import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemLandingPageComponent } from './itemLandingPage/item-landing-page/item-landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:ItemLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
