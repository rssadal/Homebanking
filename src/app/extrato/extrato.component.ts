import { Component, Input, OnInit } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent{

  transferencias: any[];

  constructor(private service: TransferenciasService) {}

  ngOnInit(){
    this.service.getAll().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    })
  }

}
