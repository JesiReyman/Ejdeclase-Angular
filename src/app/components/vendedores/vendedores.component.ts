import { Component, OnInit } from '@angular/core';
import { Vendedores } from '../../class/vendedores';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  ListaVendedores:Vendedores[]=[ 
  new Vendedores("N persona 1","A persona 1","Email persona 1",800), 
  new Vendedores("N persona 2","A persona 2","Email persona 2",1025641),
  new Vendedores("N persona 3","A persona 3","Email persona 3",568971)
]

  constructor() { }

  ngOnInit(): void {
  }

}
