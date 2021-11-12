import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients()
    .subscribe((clients:Client[])=> this.clients = clients);
  }

}
