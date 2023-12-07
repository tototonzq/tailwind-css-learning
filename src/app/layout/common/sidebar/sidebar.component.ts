import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutService } from '../../layout.service';

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
}
