import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'

/**
 * This module should not contain below things because it will throw error. Please refer the angular bad practices for details.
 * 1. Declarations
 * 2. Providers
 * 
 * This module should only contains
 * 1. Imports and Exports
 *  **/
@NgModule({
  imports: [
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule
  ]
})
export class AppMaterialModule { }
