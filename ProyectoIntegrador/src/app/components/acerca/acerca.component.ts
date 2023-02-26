import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  acerca: any;
  secciones: any;
  nombreCompleto: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.acerca = data.acerca;
      this.secciones = data.secciones;
      this.nombreCompleto = data.nombreCompleto;
    })
  }
}
