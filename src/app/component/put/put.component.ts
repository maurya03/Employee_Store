import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
  id = this.actRoute.snapshot.params['Id'];
  userObj: any = {};

  constructor( 
    private dataService:DataService,
    private actRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.dataService.getEmployeeById(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }

  updateUser(id:number, data:any) {
    if(window.confirm('Yes, please...')){
      this.dataService.updateUser(this.id, data).subscribe(res => {
        this.router.navigate(['/home'])
      })
    }
  }

}
