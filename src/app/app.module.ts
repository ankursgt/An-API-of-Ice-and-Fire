import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IceandfireService } from './iceandfire.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SortPipe } from './sort.pipe';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { HousesDetailComponent } from './houses-detail/houses-detail.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes =[
  {path:'list',component:ListViewComponent},
  {path:'', redirectTo: 'list', pathMatch:'full'},
  {path: 'books/:sequence', component:BooksDetailComponent},
  {path: 'characters/:sequence', component:CharactersDetailComponent},
  {path: 'houses/:sequence', component:HousesDetailComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SortPipe,
    BooksDetailComponent,
    CharactersDetailComponent,
    HousesDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IceandfireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
