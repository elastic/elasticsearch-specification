class GraphVertexDefinition {
	exclude: string[];
	field: Field;
	include: GraphVertexInclude[];
	minimum_document_count: long;
	shard_minimum_document_count: long;
	size: integer;
}
