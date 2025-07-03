export class CashFlow {
    public title: string;
    public category: string;
    public type: 'income' | 'outcome';
    public description: string;
    public amount: number;
    public date: Date;
    constructor(
        title: string = '',
        category: string = '',
        type: 'income' | 'outcome' = 'income',
        description: string = '',
        amount: number = 0,
        date: Date = new Date()
    ) {
        this.title = title;
        this.category = category;
        this.type = type;
        this.description = description;
        this.amount = amount;
        this.date = date;
    }
}
