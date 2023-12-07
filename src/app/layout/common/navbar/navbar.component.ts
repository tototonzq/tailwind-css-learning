import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  private readonly _LService = inject(LayoutService);

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  readonly date = new Date();

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                    Misc                                    */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onActiveSidebar() {
    this._LService.onActiveSidebar(!this._LService.isActiveSidebar$.getValue());
  }
}
