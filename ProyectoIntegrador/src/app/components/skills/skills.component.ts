import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  softSkills: any;
  hardSkills: any;
  idiomaSkills: any;
  secciones: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.softSkills = data.softSkills;
      this.hardSkills = data.hardSkills;
      this.idiomaSkills = data.idiomaSkills;
      this.secciones = data.secciones;
    })
  }

}
