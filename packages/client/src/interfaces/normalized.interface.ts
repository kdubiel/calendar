export interface Normalized<T> {
  byId: {
    [key: string]: T;
  };
  allIds: string[];
}
