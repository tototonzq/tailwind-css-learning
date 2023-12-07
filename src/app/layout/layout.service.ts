import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  readonly isActiveSidebar$ = new BehaviorSubject<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onActiveSidebar(params: boolean) {
    this.isActiveSidebar$.next(params);
  }
}
