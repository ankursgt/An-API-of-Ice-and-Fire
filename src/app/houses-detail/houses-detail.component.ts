import { Component, OnInit } from '@angular/core';
import { IceandfireService } from '../iceandfire.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.css'],
  providers: [Location]
})
export class HousesDetailComponent implements OnInit {

  public house;

  constructor(private _route: ActivatedRoute, public icefire: IceandfireService, public loc: Location) { }

  ngOnInit() {
    let mySequence = this._route.snapshot.paramMap.get('sequence');
    this.icefire.getHouseDetail(mySequence).subscribe(
      data =>{
        this.house = data;
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
