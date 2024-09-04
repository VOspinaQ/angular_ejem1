import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';


export interface Persona{
  nombre: string
  imagen: string
}


@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnChanges{
  
  ngOnChanges(changes: SimpleChanges): void {
   window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }
  @Input() imagenDelPadre: string= ''; 
  @Output() emisor = new EventEmitter<string>();
  imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg"
 

  nombre ='';

  nombres: Persona[] = [{nombre:'Carolina',imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzIshTlgRJp_GGVwZzyxq7I9DAE6bSDxapg&s'},
     {nombre:'Juan', imagen:'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg'},
     {nombre:'Lorena', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4bIYiC-Yr6XX6X73xiO4HywTVGxh67whA&s'}]


  setName(){
    this.nombre = 'Darth Vader';

  }
  alerta(nombre: string){
    if(nombre === 'Darth Vader'){
      window.alert('Soy tu padre');
    }
  }


  }
  
  


