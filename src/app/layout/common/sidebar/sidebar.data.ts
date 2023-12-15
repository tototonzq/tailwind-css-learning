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
  {
    name: 'Table Learning',
    icon: '',
    active: false,
    route: 'table-learning',
    child: [],
  },
  {
    name: 'Chart Learning',
    icon: '',
    active: false,
    route: 'chart-learning',
    child: [],
  },
  {
    name: 'Map Learning',
    icon: '',
    active: false,
    route: 'map-learning',
    child: [],
  },
  {
    name: 'Example Learning',
    icon: '',
    active: false,
    route: 'example-learning',
    child: [
      {
        name: 'Store',
        icon: '',
        route: 'store',
      },
    ],
  },
];
