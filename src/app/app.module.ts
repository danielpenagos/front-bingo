import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { IgxGridModule } from 'igniteui-angular';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: 'index',
    redirectTo: '/index.html',
    pathMatch: 'full'
    //component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
