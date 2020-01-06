import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { Router } from '@angular/router';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormGroup, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  // condition = true;
  // loggedIn = false;

  // fornGroup: FormGroup;

  // matcher = new ShowOnDirtyErrorStateMatcher();

  // btnClick(): void {
  //   this.condition = !this.condition;
  // }





  // constructor(public auth: AuthService,
  //   private fb: FormBuilder,
  //   private router: Router,
  // ) {
  //   super(fb);
  // }

  // ngOnInit() {
  //   super.ngOnInit();

  //   const signUpButton = document.getElementById('signUp');
  //   const signInButton = document.getElementById('signIn');
  //   const container = document.getElementById('container');


  //   signUpButton.addEventListener('click', () => {
  //     container.classList.add("right-panel-active");
  //   });


  //   signInButton.addEventListener('click', () => {
  //     container.classList.remove("right-panel-active");
  //   });

  //   this.activeFormGroup = CREATE_LOGIN_HEADER(this.formBuilder);
  //   // //FOCUS THE email FIELD ON PAGE LOAD
  //   // //Comment this out if you want to edit as its really frustrating
  //   // $(document).ready(function () {
  //   //   //$('#email').focus();
  //   // });

  //   // //CATCH THE SUBMIT
  //   // $('#login').on('submit', function (e) {
  //   //   e.preventDefault();
  //   //   e.stopPropagation();

  //   //   //CHECK THAT FIELDS ARE FILLED
  //   //   if ($("#email").val() != '' && $("#password").val() != '') {

  //   //     //SUBMIT BUTTON ANIMATION HANDLING
  //   //     $('#submit').addClass('checking');
  //   //     $('#submit input').attr('disabled', 'true');

  //   //     // LOGIN HERE

  //   //   } else {

  //   //     //SHAKE THE email AND PW FIELDS IF THEY ARE EMPTY ON SUBMIT
  //   //     if ($("#email").val() != '') {

  //   //       $("#password").addClass('shake');
  //   //       $("#password").focus();
  //   //       setTimeout(function () {
  //   //         $("#password").removeClass('shake');
  //   //       }, 440);

  //   //     } else {

  //   //       $("#email").addClass('shake');
  //   //       $("#email").focus();
  //   //       setTimeout(function () {
  //   //         $("#email").removeClass('shake');
  //   //       }, 440);

  //   //     }
  //   //   }
  //   // })

  //   // //HANDLE ANIMATION AND CLEARING OF INCORRECT PW
  //   // function clearPassword() {
  //   //   $("#password").addClass('shake');
  //   //   setTimeout(function () {
  //   //     $("#password").val('');
  //   //     $("#password").focus();
  //   //     $("#password").removeClass('shake');
  //   //     $('#submit input').removeAttr('disabled');
  //   //   }, 440);
  //   // }

  // }


  // public ngOnDestroy(): void {
  //   super.ngOnDestroy();
  // }


  // signUpEmail() {
  //   this.auth.SignUpEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
  // }

  // loginEmail() {
  //   this.auth.SignInEmail(this.formGroup2.get('loginEmailCtrl').value, this.formGroup2.get('loginPassCtrl').value);
  // }

  // logOut() {
  //   this.auth.SignOut();
  // }

  // loginGithub(): void {
  //   this.auth.SigninGithub();
  // }

  // loginGoogle(): void {
  //   this.auth.SigninGoogle();
  // }

  // loginFB(): void {
  //   this.auth.SigninFB();
  // }

  // private afterSignIn(): void {
  //   // Do after login stuff here, such router redirects, toast messages, etc.
  //   this.router.navigate(['/']);
  // }
}
