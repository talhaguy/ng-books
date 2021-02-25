import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Environment,
  EnvironmentToken,
} from '../injection-tokens/environment.injection-token';

@Injectable()
export class BooksApiKeyInterceptor implements HttpInterceptor {
  constructor(@Inject(EnvironmentToken) private environment: Environment) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      setParams: {
        key: this.environment.googleBooksApiKey,
      },
    });

    return next.handle(cloned);
  }
}
