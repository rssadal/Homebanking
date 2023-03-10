import { TransferenciasService } from './services/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  erro : any;

  constructor(private service: TransferenciasService){
 }

  exibirModalErro($event){
    this.erro = $event;
  }

}
