import { Component, Input } from '@angular/core';

import Swal from 'sweetalert2';
import { IncomesandoutcomesService } from '../services/incomesandoutcomes.service';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [],
  templateUrl: './list-element.component.html',
  styleUrl: './list-element.component.scss'
})
export class ListElementComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() type: 'income' | 'outcome' = 'income';
  @Input() description: string = '';
  @Input() amount: number = 0;
  @Input() category: string = '';
  @Input() date: Date = new Date();

  constructor(private incomesService: IncomesandoutcomesService) {}

  showDetails() {
    Swal.fire({
        title: this.title,
        text: this.description,
        showCloseButton: true,
        showConfirmButton: false
      })
    console.log('Showing details for:', this.title);
  }

  deleteElement() {
    Swal.fire({
      title: 'Eliminar elemento',
      text: `¿Quieres eliminar ${this.title}?`,
      icon: 'warning',
      iconColor: 'red',
      confirmButtonColor: '#3085d6',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'No, mantenerlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.incomesService.deleteCashFlow(this.id, this.type);
        console.log('Element deleted:', this.title);
        Swal.fire('Eliminado!', `${this.title} ha sido eliminado.`, 'success');
      }
    });
  }
}
