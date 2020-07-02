import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.email,Validators.required]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  goToLogin(){
    this.error = '';
    const {email, password} = this.loginForm.value;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['home']);
    }).catch(({ message }) =>{
      this.error = message;
    });

  }

  getError(control: AbstractControl){
    if(control.hasError('email')){
      return 'Invalid Email';
    } else if(control.hasError('required')){
      return 'This field required';
    } else if(control.hasError('minlength')){
      return `Not enough characters ${control.errors.minlength.requiredLength} required`;
    }
  }
}
