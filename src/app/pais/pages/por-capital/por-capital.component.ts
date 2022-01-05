import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  error: boolean = false;
  capital: Country[] = [];

  ngOnInit(): void {
  }

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
      .subscribe(capital => {
        console.log(capital);
        this.capital = capital;
      }, (err) => {
        this.error = true;
        this.capital = [];
      });

  }

}
