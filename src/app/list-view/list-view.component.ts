import { Component, OnInit } from '@angular/core';
import { IceandfireService } from '../iceandfire.service';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [SortPipe]
})
export class ListViewComponent implements OnInit {

  public books;
  public characters;
  public houses;

  constructor(public icefire: IceandfireService) { }//getting books, characters, houses onInit of page and saving in vaiables

  ngOnInit() {
    
      this.icefire.getBooksList().subscribe(
          data=>{
            
            this.books = data;
          },
          error=>{
            console.log(error.errormessage);
          }
        );

      this.icefire.getCharactersList().subscribe(
        data=>{
          this.characters = data;
        },
        error=>{
          console.log(error.errormessage);
        }
      );
      this.icefire.getHousesList().subscribe(
        data=>{
          this.houses = data;
        },
        error=>{
          console.log(error.errormessage);
        }
      );
  }

}
