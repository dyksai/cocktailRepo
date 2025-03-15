import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from 'src/components/cocktail/cocktail.component';
import { HomeComponent } from 'src/components/home/home.component';
import { IngredientComponent } from 'src/components/ingredient/ingredient.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'cocktail', component:CocktailComponent},
  { path: 'ingredient/:id', component: IngredientComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
