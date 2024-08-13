import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeinsertService } from './employeeinsert.service';





@Component({
  selector: 'app-employeeinsert',
  templateUrl: './employeeinsert.component.html',
  styleUrls: ['./employeeinsert.component.scss'],
})

export class EmployeeinsertComponent implements OnInit {
    public employee:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }




    constructor (
        private employeeinsertService: EmployeeinsertService,
    ) { }

    ngOnInit() {
        this.employee.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}