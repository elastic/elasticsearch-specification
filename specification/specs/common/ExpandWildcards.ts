enum ExpandWildcardOptions {
  open = 0,
  closed = 1,
  hidden = 2,
  none = 3,
  all = 4
}

type ExpandWildcards =
    ExpandWildcardOptions | Array<ExpandWildcardOptions>