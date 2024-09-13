import { Component, OnInit } from '@angular/core';

interface Team {
  fileName: string;
  name: string;
}

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.less',
})
export class TeamListComponent implements OnInit {
  public teamList: Team[] = [];

  ngOnInit(): void {
    this.teamList = [
      {
        fileName: 'alaves',
        name: 'Alavés',
      },
      {
        fileName: 'athletic',
        name: 'Athletic Club',
      },
      {
        fileName: 'atletico',
        name: 'Atletico de Madrid',
      },
      {
        fileName: 'barcelona',
        name: 'Barcelona',
      },
      {
        fileName: 'betis',
        name: 'Betis',
      },
      {
        fileName: 'celta',
        name: 'Celta de Vigo',
      },
      {
        fileName: 'espanyol',
        name: 'Espanyol',
      },
      {
        fileName: 'getafe',
        name: 'Getafe',
      },
      {
        fileName: 'girona',
        name: 'Girona',
      },
      {
        fileName: 'las-palmas',
        name: 'Las Palmas',
      },
      {
        fileName: 'leganes',
        name: 'Leganés',
      },
      {
        fileName: 'mallorca',
        name: 'Mallorca',
      },
      {
        fileName: 'osasuna',
        name: 'Osasuna',
      },
      {
        fileName: 'rayo',
        name: 'Rayo Vallecano',
      },
      {
        fileName: 'real-madrid',
        name: 'Real Madrid',
      },
      {
        fileName: 'real-sociedad',
        name: 'Real Sociedad',
      },
      {
        fileName: 'sevilla',
        name: 'Sevilla',
      },
      {
        fileName: 'valencia',
        name: 'Valencia',
      },
      {
        fileName: 'valladolid',
        name: 'Valladolid',
      },
      {
        fileName: 'villarreal',
        name: 'Villarreal',
      },
    ];
  }
}
