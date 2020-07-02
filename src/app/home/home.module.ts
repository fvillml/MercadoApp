import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { ReactiveFormsModule } from '@angular/forms';

// Materials modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'

// components
import { HomeRoutingModule } from './home-routing.module';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component'
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeComponent, AddProductModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
