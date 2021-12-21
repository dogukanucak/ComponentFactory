import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Inject, Injectable, Injector } from "@angular/core";
import { DomService } from "./../../tools/services/dom.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(Injector) private readonly injector: Injector) {}
  handleError(error: Error | HttpErrorResponse) {
    // Check if it's an error from an HTTP response
    if (error instanceof HttpErrorResponse) {
      // Network Error
    } else {
      // Application Error
    }
  }
  private get domService() {
    return this.injector.get(DomService);
  }
}
