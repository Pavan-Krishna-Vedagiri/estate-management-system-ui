import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth-module';
import { ResidentModule } from './resident/resident-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    ResidentModule
  ]
})
export class FeatureModule { }
