import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

@NgModule({
  imports: [
    CommonModule,
    NgxDnDModule
  ],
  declarations: [],
  exports: [
    NgxDnDModule
  ]
})
export class NgxDndPracModule { }
