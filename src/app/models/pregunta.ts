export class Pregunta {
  public tipo:number = 3;
  public opcion_elegida:number = -2;
  public k1:string = '';
  public k2:string = '';
  public titulo:string = '';
  public explicacion:string = '';
  public opciones:any = {};
  public l:string     = '';

  constructor(e:any = ''){
    if (e!='') {
      this.tipo        = e.t;
      this.titulo      = e.titulo;
      this.explicacion = e.explicacion;
      this.l           = e.l;

      for (let c=0; c < e.opciones.length; c++){
        this.opciones[c] = {'e':true, 't':e.opciones[c]};
      }
    }
  }

  public errors:string = '';
  public getErrors() { return this.errors; }

  isValid(){
    if (this.tipo != 3 && this.opcion_elegida == -1) { this.errors = 'Es necesario seleccionar una opción para avanzar'; return false; }

    if (this.tipo == 3 && this.k1 == ''){ this.errors = 'Es necesaria una respuesta completa para avanzar'; return false; }
    if (this.tipo == 3 && this.k2 == ''){ this.errors = 'Es necesaria una respuesta completa para avanzar'; return false; }

    return true;
  }
}
