import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CashFlow } from '../../models/cash-flow.model';

@Injectable({
  providedIn: 'root'
})
export class IncomesandoutcomesService {

  incomeChanged = new Subject<CashFlow[]>();
  outcomeChanged = new Subject<CashFlow[]>();

  constructor() { }
  

  incomes =  [
    new CashFlow('Ingreso 1', 'Salario', 'income', 'Descripción del ingreso 1', 1000, new Date()),
    new CashFlow('Ingreso 2', 'Ahorro', 'income', 'Descripción del ingreso 2', 2000, new Date()),
    new CashFlow('Ingreso 3', 'Prestamo', 'income', 'Descripción del ingreso 3', 3000, new Date())
  ];
  outcomes = [
    new CashFlow('Gasto 1', 'Alquiler', 'outcome', 'Descripción del gasto 1', 100, new Date()),
    new CashFlow('Gasto 2', 'Comida', 'outcome', 'Descripción del gasto 2', 200, new Date()),
    new CashFlow('Gasto 3', 'Transporte', 'outcome', 'Descripción del gasto 3', 300, new Date())
  ];

  // Methods to get, add, update, and delete incomes and outcomes
  getIncome(id: number){
    return this.incomes[id];
  }
  getOutcome(id: number){
    return this.outcomes[id];
  }

  getIncomes() {
    return this.incomes;
  }
  getOutcomes() {
    return this.outcomes;
  }

  addIncome(income: CashFlow) {
    this.incomes.push(income);
  }
  addOutcome(outcome: CashFlow) {
    this.outcomes.push(outcome);
  }
  addCashFlow(cashFlow: CashFlow) {
    if (cashFlow.type === 'income') {
      this.addIncome(cashFlow);
      this.incomeChanged.next(this.incomes.slice());
    } else {
      this.addOutcome(cashFlow);
      this.outcomeChanged.next(this.outcomes.slice());
    }
  }

  updateIncome(id: number, income: CashFlow) {
    this.incomes[id] = income;
  }
  updateOutcome(id: number, outcome: CashFlow) {
    this.outcomes[id] = outcome;
  }
  
  deleteIncome(id: number) {
    this.incomes.splice(id, 1);
  }
  deleteOutcome(id: number) {
    this.outcomes.splice(id, 1);
  }

  getTotalIncomes() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }
  getTotalOutcomes() {
    return this.outcomes.reduce((total, outcome) => total + outcome.amount, 0);
  }

  getBalance() {
    return this.getTotalIncomes() - this.getTotalOutcomes();
  }

  getIncomesByCategory(category: string) {
    return this.incomes.filter(income => income.category === category);
  }
  getOutcomesByCategory(category: string) {
    return this.outcomes.filter(outcome => outcome.category === category);
  }

  getIncomesByDate(date: Date) {
    return this.incomes.filter(income => income.date.toDateString() === date.toDateString());
  }
  getOutcomesByDate(date: Date) {
    return this.outcomes.filter(outcome => outcome.date.toDateString() === date.toDateString());
  }
}
