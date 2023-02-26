import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { Model } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public dataid!: number
  public employee!: Model

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private api: ApiService
    ) {}

  ngOnInit(): void {
      this.activated.paramMap.subscribe((param:Params)=> {
        this.dataid = param['get']('id')
        console.log(this.dataid)
      })
      this.api.fetchdata(this.dataid).subscribe((data:Model)=>{
        this.employee = data
      })
  }
  update(){
    this.api.updateemployee(this.employee, this.dataid).subscribe((res:Model)=>{
      this.router.navigate(['/'])
    })
  }
}
