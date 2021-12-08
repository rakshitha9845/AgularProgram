import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm= new FormGroup({
      'FirstNameOfCandidate':new FormControl('First Name'),
      'LastNameOfCandidate':new FormControl('Last Name'),
      'EmailAdressOfCandidate':new FormControl(null,[Validators.email,Validators.required]),
      'Password':new FormControl('password'),
    });
  }
onSubmit(){
  console.log(this.myReactiveForm.value);
}
}
