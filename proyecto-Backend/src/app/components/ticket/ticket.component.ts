import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets!: Array<Ticket>;
  filtrarCategoria!: string;

  constructor(private ticketService: TicketService,
    private router: Router) {
    // this.ticket = new Ticket();
    this.tickets = new Array<Ticket>();
    this.cargarTickets();
  }

  ngOnInit(): void {
  }

  cargarTickets() {
    this.ticketService.getTickets().subscribe(
      result => {
        result.forEach((element: any) => {
          let unTicket: Ticket = new Ticket();
          Object.assign(unTicket, element)
          this.tickets.push(unTicket)
          unTicket = new Ticket();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  modificarTicket(ticket: Ticket) {
    this.router.navigate(["ticket-form", ticket._id]);
  }

  eliminarTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket._id).subscribe(
      result => {
        if (result.status == "1") {
          //pasar a toast
          console.log(result.msg);
          this.router.navigate(['ticket']);
          this.cargarTickets();
          window.location.reload();
        }
      },
      error => {
        if (error.status == "0") {
          alert(error.msg);
        }
      }

    )
  }

  agregarTicket() {
    this.router.navigate(['ticket-form', 0])
  }

  //el filtro por categoria funciona perfecto
  filtrarPorCategoria() {
    this.ticketService.getEspectadorXcategoria(this.filtrarCategoria).subscribe(
      result => {
        this.tickets = [];
        Object.assign(this.tickets, result);
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  //limpiar() {
    //this.filtrarCategoria = '';
    //recarga la pagina asi se actualiza el table
    //this.router.navigate(['ticket']);
    //this.cargarTickets();

    //recarga la pagina
    //window.location.reload();
  //}
}
