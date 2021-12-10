import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown) {
    // Check if it's an error from an HTTP response
    if (error instanceof HttpErrorResponse) {
      console.log("Error : ", error.message);
      console.log("Status : ", error.status);
    }

    console.error("Error from global error handler", error);
  }
}
