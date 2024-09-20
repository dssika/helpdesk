import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findAll():Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`http://localhost:8080/tecnicos`);
  }
}
