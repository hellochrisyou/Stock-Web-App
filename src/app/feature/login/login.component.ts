import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { Router } from '@angular/router';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CreateBaseForm implements OnInit {


  public formGroup: FormGroup;

  get email(): AbstractControl {
    return this.formGroup.get('email');
  }

  get password(): AbstractControl {
    return this.formGroup.get('password');
  }

  constructor(public auth: AuthService,
    private router: Router, private fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    //FOCUS THE email FIELD ON PAGE LOAD
    //Comment this out if you want to edit as its really frustrating
    $(document).ready(function () {
      //$('#email').focus();
    });

    //CATCH THE SUBMIT
    $('#login').on('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      //CHECK THAT FIELDS ARE FILLED
      if ($("#email").val() != '' && $("#password").val() != '') {

        //SUBMIT BUTTON ANIMATION HANDLING
        $('#submit').addClass('checking');
        $('#submit input').attr('disabled', 'true');

        // LOGIN HERE

      } else {

        //SHAKE THE email AND PW FIELDS IF THEY ARE EMPTY ON SUBMIT
        if ($("#email").val() != '') {

          $("#password").addClass('shake');
          $("#password").focus();
          setTimeout(function () {
            $("#password").removeClass('shake');
          }, 440);

        } else {

          $("#email").addClass('shake');
          $("#email").focus();
          setTimeout(function () {
            $("#email").removeClass('shake');
          }, 440);

        }
      }
    })

    //HANDLE ANIMATION AND CLEARING OF INCORRECT PW
    function clearPassword() {
      $("#password").addClass('shake');
      setTimeout(function () {
        $("#password").val('');
        $("#password").focus();
        $("#password").removeClass('shake');
        $('#submit input').removeAttr('disabled');
      }, 440);
    }

  }

  signUp() {
  }

  signIn() {
  }

  signOut() {
    this.auth.SignOut();
  }

  signInWithGithub(): void {

  }

  signInWithGoogle(): void {

  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/']);
  }
}
