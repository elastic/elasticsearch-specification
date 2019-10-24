class ShardSegments {
	count: long;
	document_values_memory_in_bytes: long;
	file_sizes: Dictionary<string, ShardFileSizeInfo>;
	fixed_bit_memory_in_bytes: long;
	index_writer_memory_in_bytes: long;
	max_unsafe_auto_id_time_stamp: long;
	memory_in_bytes: long;
	norms_memory_in_bytes: long;
	points_memory_in_bytes: long;
	stored_fields_memory_in_bytes: long;
	terms_memory_in_bytes: long;
	term_vectors_memory_in_bytes: long;
	version_map_memory_in_bytes: long;
}
