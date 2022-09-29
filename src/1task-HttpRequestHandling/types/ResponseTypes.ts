import type { Nullable } from './Nullable';

export interface IResponse<T> {
  info: IInfo;
  results: T[];
}

interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: Nullable<string>;
}