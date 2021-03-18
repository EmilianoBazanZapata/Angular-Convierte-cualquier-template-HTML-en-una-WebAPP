import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //tomo el año Actual y lo muestro en el footer
  Year:number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
