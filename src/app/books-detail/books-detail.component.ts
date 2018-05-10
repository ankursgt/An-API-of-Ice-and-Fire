import { Component, OnInit } from '@angular/core';
import { IceandfireService } from '../iceandfire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css'],
  providers: [Location]
})
export class BooksDetailComponent implements OnInit {

  public book;

  constructor(private _route: ActivatedRoute, public icefire: IceandfireService, public loc: Location) { }

  ngOnInit() {
    let mySequence = this._route.snapshot.paramMap.get('sequence');//passing the sequence number from route to service methoda nd getting detail  
    this.icefire.getBookDetail(mySequence).subscribe(
      data =>{
        this.book = data;
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
