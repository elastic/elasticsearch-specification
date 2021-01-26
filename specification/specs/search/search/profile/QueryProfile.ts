class QueryProfile {
  breakdown: QueryBreakdown
  description: string
  time_in_nanos: long
  type: string

  children?: QueryProfile[]
}
