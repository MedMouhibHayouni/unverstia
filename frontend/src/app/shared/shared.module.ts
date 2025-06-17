import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ValidatePfePipe } from './pipes/validate-pfe.pipe';



@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent,
    FileSizePipe,
    ValidatePfePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
