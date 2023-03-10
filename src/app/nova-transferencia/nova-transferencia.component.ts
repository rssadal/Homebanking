import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.css']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number = 0;;
  destino: number = 0;

  constructor(private service: TransferenciasService, private router: Router){}

  transferir(){
    console.log('Solicitaram uma nova transferencia');

    if (this.ehValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
        this.limpar_campos();
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error));
  }

  }

  limpar_campos(){
    this.valor = 0;
    this.destino = 0;
  }

  private  ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
}

}
