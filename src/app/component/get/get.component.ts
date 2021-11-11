import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

empId: any;

employees: any;

  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute) {
    this.empId = activatedRoute.snapshot.paramMap.get('Id');

   }

  ngOnInit(): void {
    this.dataService.getEmployeeById(this.empId).subscribe(response =>{
      this.employees = response;
      console.log(this.employees)
    })

  }

   

}
