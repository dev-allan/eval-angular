import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  clientForm:FormGroup;

  constructor(private clientService: ClientService, private router : Router) {
    this.clientForm = new FormGroup({
      name: new FormControl("", Validators.required),
      username : new FormControl("", Validators.required),
      email : new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.clientService.createClient(this.clientForm.value)
    .subscribe((_) => {
      this.router.navigate(['../client']);
    })
    console.log(this.clientForm.value);
  }

}
