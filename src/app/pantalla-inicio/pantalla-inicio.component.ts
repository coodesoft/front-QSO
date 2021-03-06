import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
export class PantallaInicioComponent implements OnInit {

  public audio:any;

  constructor(public router: Router) { }

  ngOnInit() {

  }

  goToRegistro() {
    this.audio = new Audio();
    this.audio.src = "./assets/snd/init.mp3";
    this.audio.load();
    this.audio.play();
    this.router.navigateByUrl('/registro');
  }

}
