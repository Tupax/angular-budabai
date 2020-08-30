import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavComponent } from './Shared/nav/nav.component';

@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    NavComponent,
    MyComponentComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
