import {Observable, of} from 'rxjs';
import {ApplicationConstructor} from '../models/application';
import {loadedEntityRegistry} from '../registry';

export function getAppConstructor<T extends Record<string, any> = Record<string, any>>(
  appName: string,
): Observable<ApplicationConstructor<T> | null> {
  return of(loadedEntityRegistry.get(appName) || null);
}
