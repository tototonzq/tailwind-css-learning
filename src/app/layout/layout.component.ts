import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LayoutEnum } from './layout.enum';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './layouts/empty/empty.component';
import { ModernComponent } from './layouts/modern/modern.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, EmptyComponent, ModernComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  private readonly _route = inject(ActivatedRoute);

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  layout$ = new BehaviorSubject<LayoutEnum>(LayoutEnum.EMPTY);

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    this._route.data.subscribe((x) => {
      this.layout$.next(x['layout']);
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Get Type                                  */
  /* -------------------------------------------------------------------------- */
  get Layout(): typeof LayoutEnum {
    return LayoutEnum;
  }
}
