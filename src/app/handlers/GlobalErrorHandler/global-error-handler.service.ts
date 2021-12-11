import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    // Check if it's an error from an HTTP response
    if (error instanceof HttpErrorResponse) {
      // Network Error
    } else {
      // Application Error
    }
  }
}
