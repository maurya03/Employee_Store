import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

employees : any[] = [];

constructor(private dataService: DataService, private router:Router ) { }

ngOnInit(): void {
   this.fetchUsers();
}

fetchUsers() {
  return this.dataService.getEmployee().subscribe(data => {
    this.employees = data;
  })
}

onButtonClick(emp: any){
  this.router.navigate(['/get',emp.Id])
}

onButtonClick2(emp:any){
  this.router.navigate(['/put',emp.Id])
}

onButtonClick3(){
  this.router.navigate(['/post'])
}

delete(id:number){
  if(window.confirm('Really?')){
    this.dataService.deleteUser(id).subscribe(res =>{
      this.fetchUsers()
    })
  }
}


}
