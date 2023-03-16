import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  loadAmount = 30000;
  month = 12;
  interest = 1.5;
  payments: any[] = [];
  rate:any;
  emi:any

  amountChange(event: any) {
    this.loadAmount = event.value;
  }

  monthChange(event: any) {
    this.month = event.value;
  }

  interestChange(event: any) {
    this.interest = event.value;
  }

  calculateEMI(): any {
    const rate = this.interest / 1200; 
    const emi = (this.loadAmount * rate * Math.pow(1 + rate, this.month)) / (Math.pow(1 + rate, this.month) - 1);
   

     this.generatePayments(emi, rate);
     return (emi);
  }

  generatePayments(emi: number, rate: number): any {
    let balance = this.loadAmount;
    this.payments = [];

    for (let i = 1; i <= this.month; i++) {
      let interest = (balance * rate);
      let principal = (emi - interest);
      let endingBalance = (balance - principal);

      this.payments.push({
        id: i,
        beginningBalance: balance,
        emi: emi,
        principal: principal,
        interest: interest,
        endingBalance: endingBalance
      });

      balance = endingBalance;
    }
  }
}
