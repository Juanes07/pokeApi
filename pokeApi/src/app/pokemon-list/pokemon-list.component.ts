import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  page = 1;

  totalPokemons: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
   this.getPokemons();
  }

  getPokemons(){
    this.dataService.getPokemons()
    .subscribe((response:  any)=>{
      this.totalPokemons = response.count
      response.results.forEach(result =>{
        this.dataService.getMoreData(result.name)
          .subscribe((data: any)=>{
            this.pokemons.push(data);
          })
      })
    })
  }
}
