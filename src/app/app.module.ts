import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteComponent } from "./quote/quote.component";
import { FormComponent } from './quote/form/form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';




@NgModule({
  declarations: [AppComponent, QuoteComponent, FormComponent, StrikethroughDirective, DateCountPipe, QuoteDetailComponent,   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
