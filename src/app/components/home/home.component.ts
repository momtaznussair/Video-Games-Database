import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/Models/game';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = "metacrit";
  public games: Array<Game> = [];
  private routesub: Subscription = new Subscription;
  private gamesub: Subscription = new Subscription;
  constructor(private API:HttpService, private activeRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.routesub = this.activeRoute.params.subscribe((params: Params)=>{
      if (params['game-search'])
      {
        this.SearchGames(this.sort, params['game-search']);
      }
      else{
        this.SearchGames(this.sort);
      }
    })
  }

  SearchGames(sort: string, search?: string): void
  {
    this.gamesub = this.API.getGames(sort, search).subscribe(
      (gameList: APIResponse<Game>)=>{
        this.games = gameList.results;
        console.log(gameList.results[0]);
      }
    )
  }

  openGameDetails(id: string){
    this.router.navigateByUrl(`Details/${id}`);
  }
  ngOnDestroy(): void{
    if (this.gamesub)
    {
      this.gamesub.unsubscribe();
    }

    if(this.routesub)
    {
      this.routesub.unsubscribe();
    }
  }
}
