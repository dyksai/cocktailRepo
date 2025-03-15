import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from 'src/shared/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  cocktails: any[] = [];
  filterType: string = '';

  constructor(private cocktailService: CocktailService , private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const cocktailName = params['name'];
      if (cocktailName) {
        this.fetchCocktails(cocktailName);
      }
    });
  }

  fetchCocktails(name: string): void {
    this.cocktailService.getCocktailByName(name).subscribe((data: any) => {
      console.log(data);
      this.cocktails = data.drinks;
    });
  }

  applyFilter(type: string): void {
    this.filterType = type;
  }

  navigateToIngredients(drinkId: string): void {
    this.router.navigate(['/ingredient', drinkId]);
  }

}
