import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutService } from '../../layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MENU } from './sidebar.data';
import { BehaviorSubject } from 'rxjs';

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

  search: string = '';
  menuList: any[] = MENU;

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
  onNavigator(router: string) {
    this._router.navigate([router]);
  }

  onSignOut() {
    this._router.navigate(['sign-in']);
  }

  onSearch(e: string) {
    this.menuList = [];
    MENU.filter((item) => {
      if (item.name.toLowerCase().includes(e.toLowerCase())) {
        this.menuList.push(item);
      }
    });
  }
}
