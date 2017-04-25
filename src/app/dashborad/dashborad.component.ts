import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private HeroService: HeroService
  ) { }

  ngOnInit() {
    this.HeroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

}
