import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { GetallTransaccionComponent } from './components/getall-transaccion/getall-transaccion.component';
import { FiltroTransaccionComponent } from './components/filtro-transaccion/filtro-transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EspectadorFormComponent } from './components/espectador-form/espectador-form.component';
import { EspectadorComponent } from './components/espectador/espectador.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';


const routes: Routes = [
{path: "Transaccion", component:TransaccionComponent},
{path: "Producto", component:ProductoComponent},
{path: "todo", component:GetallTransaccionComponent},
{path: "filtro", component:FiltroTransaccionComponent},
{path: "ticket", component:TicketComponent},
{ path: 'espectador-form/:id', component: EspectadorFormComponent },
{ path: 'espectador', component: EspectadorComponent },
{ path: 'ticket', component: TicketComponent },
{ path: 'ticket-form/:id', component: TicketFormComponent },

{ path: '**', pathMatch:'full',redirectTo:'producto' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
