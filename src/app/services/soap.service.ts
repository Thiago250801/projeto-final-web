import { Injectable } from '@angular/core';
import {Client, NgxSoapService} from "ngx-soap";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  client: Client | undefined;
  private  clientReady = new BehaviorSubject(false)


  constructor(
    private soap: NgxSoapService
  ) {
    this.soap.createClient('./assets/CountryInfoService.xml').then(
      client => {
        console.log('client: ', client);
        this.client = client;
        this.clientReady.next(true);
      }
    )
  }

  clientState() {
    return this.clientReady.asObservable();
  }

  getAllCountries(){
    return this.client?.call('ListOfCountryNamesByName', {}).pipe(
      map((data) => {
        console.log('data: ', data);
        data.result.ListOfCountryNamesByNameResult.tCountryCodeAndName;
      })
    )
  }
}
