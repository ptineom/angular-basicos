import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent{
  title: string = 'base de ejemplo';
  numero: number = 10;

  sumar(valor:number){
    this.numero += valor;
  };
  restar(valor:number){
    this.numero -=valor;
  }
}
