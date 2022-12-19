import { Component, OnInit } from '@angular/core';
import {SoapService} from "../../services/soap.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  contries : any = []
  constructor(
    private soapService: SoapService,
  ) { }

  ngOnInit(): void {
    this.soapService.clientState().subscribe(ready => {
      if (ready){
        this.loadAllCountries()
      }
    })
  }

  loadAllCountries(){
    console.log("Lista Carregada!!")
    this.soapService.getAllCountries()?.subscribe(countries => {
      console.log('countries', countries)
      this.contries = countries;
    })
  }

}
