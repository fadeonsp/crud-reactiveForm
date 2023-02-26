import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Model } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeform!: FormGroup
  data: undefined | Model[]

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
    ) {}

  ngOnInit(): void {
      this.employeeform = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        city: ['', Validators.required],
        code: ['', Validators.required],
        phone: ['', Validators.required]
      })

      this.getemployee()
  }
  addemployee(data: Model) {
    this.api.addemployee(data).subscribe((res => {
      this.employeeform.reset()
    }))
    this.getemployee()
  }
  getemployee() {
    this.api.getemployee().subscribe(res => {
      this.data = res
    })
  }
}
