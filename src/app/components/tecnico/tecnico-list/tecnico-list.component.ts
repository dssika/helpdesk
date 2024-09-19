import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})

export class TecnicoListComponent {

    ELEMENT_DATA: Tecnico[]=[
      {
        id: 1,
        nome:'Jessica',
        cpf:'036.809.725-04',
        email:'jessica@email.com',
        senha:'1234',
        perfis: ['0'],
        dataCriacao: '15/09/2024'
      }
    ]
  
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
    dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

}

