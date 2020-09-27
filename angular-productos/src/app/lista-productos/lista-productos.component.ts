import { Component, OnInit } from '@angular/core';
import { productoL } from '../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  conjuntoProductos: productoL[];
  constructor() {
    this.conjuntoProductos=[];
   }

  ngOnInit(): void {
  }
  guardar(nombre:string, url:string, descripcion:string):boolean{
    this.conjuntoProductos.push(new productoL(nombre, url, descripcion))
    return false;
  }

}
