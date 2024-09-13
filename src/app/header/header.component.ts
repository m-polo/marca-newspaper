import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Context } from '../models/context';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @HostListener('click', [])
  updateValue() {
    alert('Disfruta de MARCA!')
  }

  year: string = '';
  month: string = '';
  day: string = '';
  temperature: string = '';
  time: Date = new Date();
  currentContext!: Context;
  contextSubscription!: Subscription;


  constructor(
    private contextService: ContextService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const currentDate: Date = new Date();
    const currentMonth: string = (currentDate.getMonth() + 1).toString();
    const currentDay: string = currentDate.getDate().toString();

    this.year = currentDate.getFullYear().toString().substring(2, 4);
    this.month =
      currentMonth.length === 1 ? currentMonth.padStart(2, '0') : currentMonth;
    this.day =
      currentDay.length === 1 ? currentDay.padStart(2, '0') : currentDay;

    this.contextSubscription = this.contextService.context$.subscribe(
      (context) => {
        this.currentContext = context;
      }
    );

    this.httpClient
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=40.41&longitude=03.70&current=temperature_2m,wind_speed_10m'
      )
      .subscribe((data: any) => {
        this.temperature = data.current.temperature_2m;
      });

    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  logOut(): void {
    this.contextService.resetContext();
  }

  ngOnDestroy(): void {
    this.contextSubscription.unsubscribe();
  }
}
