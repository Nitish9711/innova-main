import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Subscription } from 'rxjs';

import { Subscriber } from "./subscriber.model";
import {SubscribersService } from "./subscriber.service";

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  constructor(private modalService: NgbModal, public subscribersService: SubscribersService,) {}
  private subscribersSub: Subscription;
  subscribers: Subscriber[] = [];
  subscriber: Subscriber;




  ngOnInit():void{
    this.isLoading = false;
    this.form = new FormGroup(
      {
        name: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        phone: new FormControl(null, {validators: [Validators.required]}),

        email: new FormControl(null, {validators: [Validators.required]}),
      }
    )
  }
  onSaveSubscriber(event: Event){
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    event.preventDefault();


    let subscriber = {

      "name": this.form.value.name,
      "phone": this.form.value.phone,
      "email": this.form.value.email
    }


      this.subscribersService.addSubscriber(subscriber);
      this.isLoading = false;
      this.form.reset();
  }

}
