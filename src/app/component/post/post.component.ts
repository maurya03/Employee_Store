import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  userObj: any = {};

  constructor(
    public dataService:DataService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  addUser(data:any){
    if(window.confirm('Successfully Added!!')){
    this.dataService.addUser(this.userObj).subscribe((data:{}) =>{
      this.router.navigate(['/home'])
    })
  }
}

}
