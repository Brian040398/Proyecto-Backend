import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetallTransaccionComponent } from './components/getall-transaccion/getall-transaccion.component';
import { FiltroTransaccionComponent } from './components/filtro-transaccion/filtro-transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { EspectadorComponent } from './components/espectador/espectador.component';
import { EspectadorFormComponent } from './components/espectador-form/espectador-form.component';
import { ProductosFiltroComponent } from './components/productos-filtro/productos-filtro.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    TransaccionComponent,
    NavComponent,
    FooterComponent,
    GetallTransaccionComponent,
    FiltroTransaccionComponent,
    TicketComponent,
    TicketFormComponent,
    EspectadorComponent,
    EspectadorFormComponent,
    ProductosFiltroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
