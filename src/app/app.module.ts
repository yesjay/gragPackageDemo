import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DragulaModule } from 'ng2-dragula';
import { NgxDndPracModule } from './ngx-dnd-prac/ngx-dnd-prac.module';
import { Html5DragPracComponent } from './html5-drag-prac/html5-drag-prac.component';
import { NgxDndPracComponent } from './ngx-dnd-prac/ngx-dnd-prac.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5DragPracComponent,
    NgxDndPracComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    NgxDndPracModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
