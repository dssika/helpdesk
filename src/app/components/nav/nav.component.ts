import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent implements OnInit {
  constructor(private router: Router) { } // o router permite navegar entre os componentes

  ngOnInit(): void {

    this.router.navigate(['tecnicos']); //vai navegar para a rota /home a partir de onde ele está

  };


}
