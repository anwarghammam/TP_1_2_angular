import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvtech/cv/cv.component';
import { ListeComponent } from './cvtech/liste/liste.component';
import { ItemComponent } from './cvtech/item/item.component';
import { DetailsComponent } from './cvtech/details/details.component';
import { DefaultimagePipe } from './cvtech/defaultimage.pipe';
import { FormsModule } from '@angular/forms';
import { HightlightDirective } from './directives/hightlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    DefaultimagePipe,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
