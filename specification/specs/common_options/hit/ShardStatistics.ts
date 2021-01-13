class ShardStatistics {
  failed: integer;
  successful: integer;
  total: integer;
  failures?: ShardFailure[];
  skipped?: integer;
}
