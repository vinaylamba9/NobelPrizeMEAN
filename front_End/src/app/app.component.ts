import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  constructor(private http: HttpClient){}
  
  fetchedData = [];
  api1: boolean = false;
  api2: boolean = false;
  api3: boolean = false;

  onSearchName(name: string){
    if(!name){
      this.api1 = true;
      this.api2 = false;
      this.api3 = false;
      return;
    }
    this.http.get<[]>(`http://localhost:3000/api/1?name=${name.toLowerCase()}`).subscribe(data =>{
      this.api1 = true;
      this.api2 = false;
      this.api3 = false;
      this.fetchedData = data.slice();
    })  
  }

  onSearchYearAndCategory(year: string, category: string){
    this.http.get<[]>(`http://localhost:3000/api/3?year=${year}&category=${category}`).subscribe(data =>{
      this.api1 = false;
      this.api2 = true;
      this.api3 = false;
      this.fetchedData = data.slice();
    })
  }

  fetchAllSorted(){
    this.http.get<[]>('http://localhost:3000/api/4').subscribe(data =>{
      this.api1 = false;
      this.api2 = false;
      this.api3 = true;
      this.fetchedData = data.slice();
    })
  }

}