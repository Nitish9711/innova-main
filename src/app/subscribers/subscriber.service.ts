import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Subscriber } from "./subscriber.model";


import {environment} from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "subscriber/";

@Injectable({ providedIn: "root" })
export class SubscribersService {
  private subscribers: Subscriber[] = [];
  private subscribersUpdated = new Subject<Subscriber[]>();


  constructor(private http: HttpClient, private router: Router) {}





  addSubscriber(subscriber) {
    const subscriberData = new FormData();
    subscriberData.append("name", subscriber.name);
    subscriberData.append("phone", subscriber.phone);
    subscriberData.append("email", subscriber.email);
    console.log(subscriber);
    // competitionData.append("imagePath", competition.image, competition.name);


// console.log(competition);

    this.http
      .post(
        BACKEND_URL,
        subscriber
      )
      .subscribe(temp => {

        // console.log(responseData)
        // console.log("dkfsa" );
        console.log(temp["b"]);

        this.subscribers.push(temp["b"]);
        this.subscribersUpdated.next([...this.subscribers]);

    });
  }


}
