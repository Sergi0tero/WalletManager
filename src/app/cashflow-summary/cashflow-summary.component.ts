import { Component } from '@angular/core';
import { IncomesandoutcomesService } from '../services/incomesandoutcomes.service';
import { CashFlow } from '../../models/cash-flow.model';

@Component({
  selector: 'app-cashflow-summary',
  standalone: true,
  imports: [],
  templateUrl: './cashflow-summary.component.html',
  styleUrl: './cashflow-summary.component.scss'
})
export class CashflowSummaryComponent {
  incomes: CashFlow[] = [];
  outcomes: CashFlow[] = [];
  balance: number = 0;
  totalIncome: number = 0;
  totalOutcome: number = 0;
  constructor(private incomesandoutcomesService: IncomesandoutcomesService) {
    this.incomes = this.incomesandoutcomesService.getIncomes();
    console.log('Incomes:', this.incomes);
    this.outcomes = this.incomesandoutcomesService.getOutcomes();
    console.log('Outcomes:', this.outcomes);
    this.updateSummary();
    this.incomesandoutcomesService.incomeChanged.subscribe((incomes) => {
      this.incomes = incomes;
      this.updateSummary();
    });
    this.incomesandoutcomesService.outcomeChanged.subscribe((outcomes) => {
      this.outcomes = outcomes;
      this.updateSummary();
    });
   }
   updateSummary() {
    this.totalIncome = this.incomes.reduce((sum, income) => sum + income.amount, 0);
    this.totalOutcome = this.outcomes.reduce((sum, outcome) => sum + outcome.amount, 0);
    this.balance = this.totalIncome - this.totalOutcome;

    console.log('Total Income:', this.totalIncome);
    console.log('Total Outcome:', this.totalOutcome);
    console.log('Balance:', this.balance);
   }
}
