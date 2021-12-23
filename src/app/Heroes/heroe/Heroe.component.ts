import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './Heroe.component.html'
})

export class HeroeComponent{
  title: string = 'Heroe component';
  nombre: string ="Iroman";
  edad: number = 45;

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  };
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  };
  cambiarHeroe():void{
    this.nombre = "spiderman";
  };
  cambiarEdad():void{
    this.edad = 30;
  };
}
