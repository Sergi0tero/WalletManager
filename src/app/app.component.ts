import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";
import { ListElementComponent } from './list-element/list-element.component';
import { NgFor } from '@angular/common';
import { IncomesandoutcomesService } from './services/incomesandoutcomes.service';
import { AddRegisterComponent } from "./add-register/add-register.component";
import { CashFlow } from '../models/cash-flow.model';
import { DisplayCashflowComponent } from './display-cashflow/display-cashflow.component';
import { CashflowSummaryComponent } from './cashflow-summary/cashflow-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, AddRegisterComponent, DisplayCashflowComponent, CashflowSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

/** ✔✔✔
 * == TODO LIST ==
 * == Funcionalidades basicas ==
 * Se pueda agregar un ingreso o gasto con toda su informacion (titulo, categoria, tipo, descripcion, monto, fecha) ✔
 * Se pueda ver una lista de ingresos y gastos ✔
 * Se pueda ver un detalle de cada ingreso o gasto ✔
 * Se pueda editar un ingreso o gasto
 * Se pueda eliminar un ingreso o gasto ✔
 * Se pueda ver un resumen de los ingresos y gastos ✔
 * Se pueda ver un saldo total ✔
 * Se pueda ver un calendario con los ingresos y gastos del mes
 * Se puede guardar la informacion en el localStorage
 * Se pueda exportar la informacion a un archivo JSON
 * Se pueda importar un archivo JSON con ingresos y gastos
 * == Funcionalidades adicionales ==
 * Hacer el frontend responsive
 * Se pueda cambiar el tema de la aplicacion (oscuro, claro)
 * Se pueda filtrar por fecha (hoy, esta semana, este mes, este año)
 * Se pueda filtrar por tipo de ingreso o gasto (debito, credito)
 * Crear lista desplegable para elegir la categoría del ingreso o gasto
 * Se pueda ver el tipo de gasto (debito credito) 
 * Se puedan chulear los gastos y eliminarlos 
 * Se pueda ver el saldo total
 * Se pueda crear ingresos mensuales
 * Se pueda crear gastos mensuales
 * Se pueda ver un calendario con los ingresos y gastos del mes
 * poner varios niveles de gastos e ingresos para poder dividirlos mejor
 * Se pueda ver un grafico de los ingresos y gastos del mes
 * Se pueda ver un grafico de los ingresos y gastos del año
 */
