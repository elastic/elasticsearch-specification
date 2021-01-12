class AutoDateHistogramAggregation {
  buckets?: integer;
  field?: Field;
  format?: string;
  minimum_interval?: MinimumInterval;
  missing?: Date;
  offset?: string;
  params?: Dictionary<string, UserDefinedValue>;
  script?: Script;
  time_zone?: string;
}
