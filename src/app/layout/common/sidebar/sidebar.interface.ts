export interface IMenu {
  name: string;
  icon: string;
  route: string;
  active?: boolean;
  child?: IMenu[];
}
