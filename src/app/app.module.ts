import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DragDropListModule } from '../../projects/ng-drag-drop-list/src/lib/drag-drop-list.module';
import { MatToolbarModule, MatTabsModule, MatListModule, MatIconModule, MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DragDropListModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
