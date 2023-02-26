import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(5)]],
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit() {}

  get Username(){
    return this.form.get("username");
  }

  get Password(){
    return this.form.get("password");
  }


  get UsernameInvalid(){
    return this.Username?.touched && !this.Username?.valid;
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }


  onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      alert("Todo salio bien ¡Enviar formulario!")
    } else{
      this.form.markAllAsTouched();
    }
  }

}
