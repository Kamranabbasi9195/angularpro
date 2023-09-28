import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStdComponent } from '../add-edit-std/add-edit-std.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private dialog:MatDialog){}

    openAddEditStdForm(){
      this.dialog.open(AddEditStdComponent)
    }

  }

