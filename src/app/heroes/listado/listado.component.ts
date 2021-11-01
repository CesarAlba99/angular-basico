import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

    heroes: string[]= ['Spíderman','Thor','IronMan','Hulk'];
    heroeBorrado: string='';

    borrarHeroe(){

      this.heroeBorrado = this.heroes.shift()|| '';
     
      //this.heroes=['Thor','IronMan','Hulk'];
    }

}
