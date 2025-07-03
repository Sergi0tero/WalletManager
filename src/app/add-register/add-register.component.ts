import { Component } from '@angular/core';
import { IncomesandoutcomesService } from '../services/incomesandoutcomes.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CashFlow } from '../../models/cash-flow.model';

@Component({
  selector: 'app-add-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-register.component.html',
  styleUrl: './add-register.component.scss'
})
export class AddRegisterComponent {
  title: string = '';
  category: string = '';
  type: 'income' | 'outcome' = 'income';
  description: string = '';
  amount: number = 0;
  date: Date = new Date();
  newIncome: string = '';
  newOutcome: string = '';

  constructor(private incomesandoutcomesService: IncomesandoutcomesService) {}

  addRegister() {
    this.incomesandoutcomesService.addCashFlow( new CashFlow( this.title, this.category, this.type, this.description, this.amount, this.date));
    
    // Reset form fields after adding the register
    this.title = '';
    this.type = 'income';
    this.description = '';
    this.amount = 0;
    this.date = new Date();
    console.log('actual incomes:', this.incomesandoutcomesService.getIncomes());
  }

  toggleType() {
    this.type = this.type === 'income' ? 'outcome' : 'income';
  }
}
