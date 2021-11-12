import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() client!: Client;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
  }

  deleteClient(): void {
    this.clientService.deleteClientById(this.client.id)
    .subscribe((_) => {
      this.deleteEmitter.emit();
    })
  }

}
