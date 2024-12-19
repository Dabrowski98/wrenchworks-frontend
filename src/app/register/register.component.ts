import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    console.log('Register attempt:', this.registerData);
  }
}