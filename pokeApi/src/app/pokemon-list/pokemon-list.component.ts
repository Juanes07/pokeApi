import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response:  any)=>{
        response.results.forEach(result =>{
          this.dataService.getMoreData(result.name)
            .subscribe((data: any)=>{
              this.pokemons.push(data);
              console.log(this.pokemons)
            })
        })
      })
  }
}
