import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export type Environment = typeof environment;

export const EnvironmentToken = new InjectionToken<Environment>('Environment', {
  providedIn: 'root',
  factory: () => environment,
});
