import { Component, OnInit } from '@angular/core';
import { IceandfireService } from '../iceandfire.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css'],
  providers: [Location]
})
export class CharactersDetailComponent implements OnInit {

  public character;

  constructor(private _route: ActivatedRoute, public icefire: IceandfireService, public loc: Location) { }

  ngOnInit() {
    let mySequence = this._route.snapshot.paramMap.get('sequence');
    this.icefire.getCharacterDetail(mySequence).subscribe(
      data =>{
        this.character = data;
      },
      error =>{
        console.log(error.errormessage);
      }
    )
  }

  public goBack(): any{
    this.loc.back();
  }

}
