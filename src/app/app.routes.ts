import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutEnum } from './layout/layout.enum';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { DashboardComponent } from './modules/user/dashboard/dashboard.component';

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
    ],
  },
];
