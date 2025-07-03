import { Component } from '@angular/core';
import { CashFlow } from '../../models/cash-flow.model';
import { IncomesandoutcomesService } from '../services/incomesandoutcomes.service';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddRegisterComponent } from '../add-register/add-register.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ListElementComponent } from '../list-element/list-element.component';

@Component({
  selector: 'app-display-cashflow',
  standalone: true,
  imports: [ListElementComponent, NgFor],
  templateUrl: './display-cashflow.component.html',
  styleUrl: './display-cashflow.component.scss'
})
export class DisplayCashflowComponent {
  title: string = '';
  outcomes: CashFlow[] = [];
  incomes: CashFlow[] = [];
  constructor(private incomesandoutcomesService: IncomesandoutcomesService) {
    this.incomesandoutcomesService.incomeChanged.subscribe((incomes: CashFlow[]) => {
      this.incomes = incomes;
    });
    this.incomesandoutcomesService.outcomeChanged.subscribe((outcomes: CashFlow[]) => {
      this.outcomes = outcomes;
    });
  }
  ngOnInit() {
    this.title = 'wallet-manager';
    this.outcomes = this.incomesandoutcomesService.getOutcomes();
    this.incomes = this.incomesandoutcomesService.getIncomes();
  }
}
