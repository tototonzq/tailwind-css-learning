import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutEnum } from './layout/layout.enum';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { DashboardComponent } from './modules/user/dashboard/dashboard.component';
import { BasketComponent } from './modules/user/basket/basket.component';
import { CssComponent } from './modules/misc/css/css.component';
import { CustomComponent } from './modules/misc/custom/custom.component';
import { FormGroupComponent } from './modules/misc/form-group/form-group.component';
import { FormLearningComponent } from './modules/misc/form-learning/form-learning.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: LayoutEnum.EMPTY,
    },
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: LayoutEnum.MODERN,
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'basket',
        component: BasketComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: LayoutEnum.MODERN,
    },
    children: [
      {
        path: 'css',
        component: CssComponent,
      },
      {
        path: 'customs',
        component: CustomComponent,
      },
      {
        path: 'form-group',
        component: FormGroupComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'sign-in' },
];
