class GraphVertexDefinition {
	field: Field;
	size: integer;
	min_doc_count: long;
	shard_min_doc_count: long;
	exclude: string[];
	include: GraphVertexInclude[];
}
