import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
