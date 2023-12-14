import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AuthGuardService } from './shared/services/auth-guard.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AuthGuardService],
};
