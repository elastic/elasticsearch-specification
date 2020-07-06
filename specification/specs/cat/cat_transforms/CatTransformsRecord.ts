class CatTransformsRecord implements ICatRecord {
	changes_last_detection_time: string;
	checkpoint_duration_time_exp_avg: long;
	create_time: Date;
	description: string;
	dest_index: string;
	documents_indexed: long;
	documents_processed: long;
	frequency: Time;
	id: string;
	indexed_documents_exp_avg: long;
	index_failure: long;
	index_time: long;
	index_total: long;
	max_page_search_size: long;
	pages_processed: long;
	pipeline: string;
	processed_documents_exp_avg: long;
	processing_time: long;
	reason: string;
	search_failure: long;
	search_time: long;
	search_total: long;
	/** @prop_serializer IndicesFormatter */
	source_index: Indices;
	state: TransformState;
	transform_type: TransformType;
	trigger_count: long;
	version: string;
}
