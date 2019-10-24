@rest_spec_name("rollup.put_job")
class CreateRollupJobRequest extends RequestBase {
	cron: string;
	groups: RollupGroupings;
	index_pattern: string;
	metrics: RollupFieldMetric[];
	page_size: long;
	rollup_index: IndexName;
}
