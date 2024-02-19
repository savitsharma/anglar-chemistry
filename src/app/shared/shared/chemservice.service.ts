import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagepopupComponent } from './messagepopup/messagepopup.component';

@Injectable({
  providedIn: 'root'
})
export class ChemserviceService {

  siteaddress() {
    throw new Error('Method not implemented.');
  }
  getSiteData() {
    throw new Error('Method not implemented.');
  }
  URL= '';
  CHEM_SEARCH_POST = environment.apiUrl + 'depict/cot/png';

  // constructor(private _snackBar: MatSnackBar) { }
  constructor(){}


  // openSnackBar(durationInSeconds: any, message: any) {
  //   this._snackBar.openFromComponent(MessagepopupComponent, {
  //     duration: durationInSeconds * 1000,
  //     data: message
  //   });
  // }
}
