import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class IceandfireService {

  private url = "https://www.anapioficeandfire.com/api";
  private urlb = "";
  private urlc = "";
  private urlh = "";

  constructor(private _http: HttpClient) { }//geting cards list and details seperately in methods

  getBooksList():any{
    
      let myResponse = this._http.get(this.url+"/books");
      this.urlb = this.url+"/books";
      return myResponse;
  }
    
  getCharactersList():any{
    
    let myResponse = this._http.get(this.url+"/characters");
    this.urlc = this.url+"/characters";
    return myResponse;
  }

  getHousesList():any{
    
    let myResponse = this._http.get(this.url+"/houses");
    this.urlh = this.url+"/houses";
    return myResponse;
}

  getBookDetail(seq):any{
    let myResponse = this._http.get(this.urlb+"/"+seq);
    console.log(this.urlb);
    return myResponse;
  }

  getCharacterDetail(seq):any{
    let myResponse = this._http.get(this.urlc+"/"+seq);
    console.log(this.urlc);
    return myResponse;
  }

  getHouseDetail(seq):any{
    let myResponse = this._http.get(this.urlh+"/"+seq);
    console.log(this.urlh);
    return myResponse;
  }

} 
