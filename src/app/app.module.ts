import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteComponent } from "./quote/quote.component";
import { DetailComponent } from './quote/detail/detail.component';
import { FormComponent } from './quote/form/form.component';




@NgModule({
  declarations: [AppComponent, QuoteComponent, DetailComponent, FormComponent,   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
