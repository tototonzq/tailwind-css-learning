import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutService } from '../../layout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .sidebar {
        &.active {
          width: 20rem;
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class SidebarComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  private readonly _LService = inject(LayoutService);
  private readonly _router = inject(Router);
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  readonly date = new Date();
  readonly isActiveSidebar$ = this._LService.isActiveSidebar$;
  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                    Misc                                    */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onSignOut() {
    this._router.navigate(['sign-in']);
  }
}
