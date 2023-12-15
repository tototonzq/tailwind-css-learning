import { IMenu } from './sidebar.interface';

export const MENU: IMenu[] = [
  {
    name: 'Dashboard',
    icon: '',
    route: 'dashboard',
    active: false,
    child: [],
  },
  {
    name: 'Basket',
    icon: '',
    active: false,
    route: 'basket',
    child: [],
  },
  // ... other menu items remain unchanged
  {
    name: 'Form Learning',
    icon: '',
    active: false,
    route: 'form-learning',
    child: [
      {
        name: 'Form Group',
        icon: '',
        route: 'form-group',
      },
      {
        name: 'Form Control',
        icon: '',
        route: 'form-control',
      },
      {
        name: 'Form Array',
        icon: '',
        route: 'form-array',
      },
      {
        name: 'Form Builder',
        icon: '',
        route: 'form-builder',
      },
      {
        name: 'Form Validation',
        icon: '',
        route: 'form-validation',
      },
    ],
  },
];
