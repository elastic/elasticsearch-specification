class SimulatePipelineDocument {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	@prop_serializer("SourceConverter")
	_source: any;
}
