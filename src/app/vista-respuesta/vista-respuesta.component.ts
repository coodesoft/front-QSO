import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { PreguntasService } from './../services/preguntas.service';
import { Respuesta }        from './../models/respuesta';

@Component({
  selector: 'app-vista-respuesta',
  templateUrl: './vista-respuesta.component.html',
  styleUrls: ['./vista-respuesta.component.css']
})
export class VistaRespuestaComponent implements OnInit {

  public respuesta = new Respuesta();

  constructor(
    public router: Router,
    public preguntas: PreguntasService
  ) { }

  ngOnInit() {
    this.respuesta = this.preguntas.getRespuesta();
  }

  goToPregunta(){
      if (this.preguntas.respuestas_correctas == 3 && this.preguntas.preguntaActual == 3) {
        this.router.navigateByUrl('/premio1');
      } else {
        this.router.navigateByUrl('/pregunta');
      }
  }

}
