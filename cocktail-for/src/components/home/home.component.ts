import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cocktails:string[] = ['Margarita', 'Mojito'];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToCocktails(cocktailName: string) {
    this.router.navigate(['/cocktail'], { queryParams: { name: cocktailName } });
  }
}