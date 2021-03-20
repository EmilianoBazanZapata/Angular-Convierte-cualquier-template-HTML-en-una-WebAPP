import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //tomo el año Actual y lo muestro en el footer
  Year:number = new Date().getFullYear();
  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
