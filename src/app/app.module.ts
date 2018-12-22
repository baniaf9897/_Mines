import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { RowComponent } from './row/row.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RowComponent,
    MinesweeperComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatSnackBarModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
