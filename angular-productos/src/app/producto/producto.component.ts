import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { productoL } from '../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: productoL;
  @HostBinding('attr.class') cssClass='col-md-4';
  constructor() {}

  ngOnInit(): void {
  }

}

