export enum ExpandWildcardsOptions {
  open = 0,
  closed = 1,
  hidden = 2,
  none = 3,
  all = 4
}

export type ExpandWildcards =
    ExpandWildcardsOptions | Array<ExpandWildcardsOptions>