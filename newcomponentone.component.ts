import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import {TableModule} from 'primeng/table';


interface City {
    label: string,
    userId: any,
                  id: any,
                  title: string,
                  completed: any
}


@Component({
  selector: 'app-newcomponentone',
  templateUrl: './newcomponentone.component.html',
  styleUrls: ['./newcomponentone.component.css']
})
export class NewcomponentoneComponent implements OnInit {
    
//    @ViewChild('cities2') cities2Dropdown: any;
    
    // cities1: SelectItem[];
    // cities2: SelectItem[];
    cities1: City[];
    cities2: City[];
    cities2State: boolean = true;
    selectedCities1 : City;
    selectedCities2 : City;
    
    departmentList : any[] = [];
    selectedOption1: any;
    
    // this is the list of filtered cars which will be dsplayed in the table
    filteredCars: any[];

  constructor(private http: HttpClient) {  }

  ngOnInit() {
      
      this.http.get('https://jsonplaceholder.typicode.com/todos')
          .subscribe((res: any) => {
          this.cities1 = res.map(a => {
              return {
                  label: a.title,
                  userId: a.userId,
                  id: a.id,
                  title: a.title,
                  completed: a.completed
              };
            });
       
          [{label: "First", value: 1}, {2}, 3]
      }, error => {
          
      });
      
      this.http.get('https://jsonplaceholder.typicode.com/todos')
          .subscribe((res: any) => {
          this.cities2 = res.map(a => {
              return {
                  label: a.title,
                  userId: a.userId,
                  id: a.id,
                  title: a.title,
                  completed: a.completed
              };
            });
        }, error => {
          
      });
      
  }
    
    onsomeFunct(event){
        console.log(event);
        console.log(this.selectedCities1);
        // Log the current selection
        // Filter cities2 based on the selection 1
        // If necessary set the cities2
        var selectedUserId = this.selectedCities1.userId;
        this.cities2 = this.cities2.filter(function(city) {
	        return city.userId === selectedUserId;
        });
        
        // Set cities2 dropdown's "disabled" to false
        // Use #cities2
           // this.cities2Dropdown.disabled = false;
        this.cities2State = false;

    }
    
    
    
    
    searchClick(){
        console.log("Search Clicked");
        
        this.http.get('https://jsonplaceholder.typicode.com/todos')
          .subscribe((res: any) => {
            // Store all the values here --> this.cars
          this.cities1 = res.map(a => {
              return {
                  label: a.title,
                  userId: a.userId,
                  id: a.id,
                  title: a.title,
                  completed: a.completed
              };
            });
            
            // Filter Here
            // this.filteredCars = this.cars.filter(function(car) { .......
       
            // Display the data in table (Most Probably not required)
      }, error => {
          
      });
    }
  
    
    /*
City: <>
Type: Sedan / Hatchback / Hybrid --> <>
type: [
{label: "Sedan",
value: "sedan",
}, {
label: "hatchback / Big Car",
value: "hatchback"
}, {
label: Hybrid / Electric Cars",
value: "hybrid"
}
]
Manufacturer: Honda / Tesla / GM --> <>


Data: test.json
*/
}



Name: 
city:
phone number:



Name: ABC
city: xyz
phone : 123


this.filteredCars = this.cars.filter(function(car) {
	let result = false;        
    if ((car.name === selectedName)
        && (car.city === selectedCity) 
        && (car.phone === selectedPhone)) {
        
        result = true;
    }
    return result;
});































