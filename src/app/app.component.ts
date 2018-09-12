import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogDataExampleDialog} from './DialogDataExampleDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public dialog: MatDialog) {}

	openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
    	width: '55%',
    	height: '75%'
    });

    
  }

 }



