import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operatrice',
  templateUrl: './operatrice.component.html',
  styleUrls: ['./operatrice.component.sass']
})
export class OperatriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rederiger(page)
  {
    window.location.href ="http://localhost:4200/"+page;
  }
}
