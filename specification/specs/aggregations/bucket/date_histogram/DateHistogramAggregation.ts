class DateHistogramAggregation {
  calendar_interval: Union<DateInterval, Time>;
  extended_bounds: ExtendedBounds<DateMath>;
  hard_bounds: ExtendedBounds<DateMath>;
  field: Field;
  fixed_interval: Union<DateInterval, Time>;
  format: string;
  interval: Union<DateInterval, Time>;
  min_doc_count: integer;
  missing: Date;
  offset: Time;
  order: HistogramOrder;
  params: Dictionary<string, any>;
  script: Script;
  time_zone: string;
}
