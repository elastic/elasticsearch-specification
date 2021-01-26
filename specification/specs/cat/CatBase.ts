class CatRequestBase extends RequestBase {
  format?: string
  h?: string[]
  help?: boolean
  local?: boolean
  master_timeout?: Time
  s?: string[]
  v?: boolean
}

class CatResponseBase<TCatRecord> extends ResponseBase {
  records: TCatRecord[]
}
