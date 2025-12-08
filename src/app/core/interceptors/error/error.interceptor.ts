import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { NotificationService } from "../../services/notification.service";
import { SKIP_ERROR_ALERT } from "../../models/http-flags.token";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);
  const skip = req.context.get(SKIP_ERROR_ALERT);

  return next(req).pipe(
    catchError(error => {

      // If our custom flag is set to true, skip the error alerts
      if (!skip) {
        // If the user is offline (not connected to the internet)
        if (!navigator.onLine) {
          notificationService.showError('Offline Error', 'You appear to be offline. Please check your internet connection and try again.');
        } else if (error.status === 0) {
          notificationService.showError('Network Error', 'Cannot connect to the server. If this issue persists, contact your administrator.');
        } else if (error.status === 400) {
          notificationService.showError('Request Error', 'Invalid request parameters. If this issue persists take a screenshot of the page and contact your administrator.');
        } else if (error.status === 401) {
          notificationService.showError('Unauthorized Error', 'You are not authorized to perform this action. If you believe this is a mistake, contact your administrator.');
        }  else if (error.status === 403) {
          notificationService.showError('Forbidden Error', 'You do not have permission to perform this action. If you believe this is a mistake, contact your administrator.');
        } else if (error.status === 404) {
          notificationService.showError('Not Found Error', 'The requested resource was not found. Ensure this resource exists and try again.');
        } else if (error.status === 500) {
          notificationService.showError('Server Error', 'An unexpected error occurred on the server. If this issue persists, contact your administrator.');
        } else {
          notificationService.showError('Unknown Error', 'An unexpected error occurred. If this issue persists, contact your administrator.');
        }        
      }
      // Re-throw the error so the service/component can handle it
      return throwError(() => error);
    })
  );
};
