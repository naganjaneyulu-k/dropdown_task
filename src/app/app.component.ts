import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

  
    
    countries = [
        {id: 1, name: 'Singapore'},
        {id: 2, name: 'Malaysia'},
        {id: 3, name: 'Indonesia', },
        {id: 4, name: 'Philippines'},
        {id: 5, name: 'Thailand'},
        {id: 6, name: 'Albania'},
        {id: 7, name: 'Algeria'},
        {id: 8, name: 'Andorra'},
        {id: 9, name: 'Angola'},
        {id: 10, name: 'Bulgaria'},
        {id: 11, name: 'Canada'},
        {id: 12, name: 'Colombia'},
        {id: 13, name: 'France'},
        {id: 14, name: 'Thailand'},
        {id: 15, name: 'Turkey'},
    ];
   
    
    users = [
        {id: 'anji', name: 'Anji k'},
        {id: 'ramesh', name: 'ramesh B'},
        {id: 'radha', name: 'radha K'},
        {id: 'sree', name: 'sree K'},
    ];
    
    selectedCountyIds: string[];
    selectedUserIds: number[];
    
   
    
    addCustomUser = (term) => ({id: term, name: term});
    
   
}
