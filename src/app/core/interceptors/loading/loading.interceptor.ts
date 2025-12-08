import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "../../services/loading.service";
import { finalize } from "rxjs";
import { SKIP_LOADING } from "../../models/http-flags.token";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loading = inject(LoadingService);
    const skip = req.context.get(SKIP_LOADING);

    if (!skip) {
        loading.show();
    }

    return next(req).pipe(
        finalize(() => {
            if (!skip) {
                loading.hide();
            }
        })
    );
}