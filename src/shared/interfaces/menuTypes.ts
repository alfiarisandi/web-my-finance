export interface IMenuTypes {
  url: string;
  label?: string;
  icon?: JSX.Element;
  child?: IMenuTypes[];
  devider?: JSX.Element;
}
