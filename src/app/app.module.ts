import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GlobalErrorHandler } from "@componentfactory/handlers/index";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DomService } from "./tools/services/dom.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    DomService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
