import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private autenticador: AngularFireAuth,
    private router: Router) { }

authentication(){
  this.autenticador.signOut()
  .then((res:any) => this.router.navigate(['login']))
  .catch((error:any) => console.dir(error));

}

  ngOnInit() {
  }

  Cancel(){
    this.router.navigate(['home'])
  }
}
