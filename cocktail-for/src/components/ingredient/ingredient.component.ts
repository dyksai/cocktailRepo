import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/shared/cocktail.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  cocktails: any;
  ingredients: { ingredient: string, measure: string }[] = [];
  errorMessage: string = '';


  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) {}

  ngOnInit(): void {
  const drinkId = this.route.snapshot.paramMap.get('id');
  if (drinkId) {
    this.cocktailService.getCocktailById(drinkId).subscribe({
      next: (data: any) => {
        if (data.drinks && data.drinks.length > 0) {
          this.cocktails = data.drinks[0];
          if (this.cocktails) {
            for (let i = 1; i <= 15; i++) {
              const ingredient = this.cocktails['strIngredient' + i];
              const measure = this.cocktails['strMeasure' + i];
              if (ingredient) {
                this.ingredients.push({ ingredient, measure });
              }
            }
          }
        } else {
          this.errorMessage = 'No cocktail data found.';
        }
      },
      error: (error) => {
        console.log('API Error:', error);
        this.errorMessage = 'Failed to load cocktail data. Please try again later.';
      }
    });
  }
}

}