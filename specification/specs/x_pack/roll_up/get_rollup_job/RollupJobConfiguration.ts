class RollupJobConfiguration {
  cron: string;
  groups: RollupGroupings;
  id: string;
  index_pattern: string;
  metrics: RollupFieldMetric[];
  page_size: long;
  rollup_index: IndexName;
  timeout: Time;
}
