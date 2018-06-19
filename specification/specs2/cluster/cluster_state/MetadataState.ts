class MetadataState {
	templates: Map<string, TemplateMapping>;
	cluster_uuid: string;
	indices: Map<string, MetadataIndexState>;
}
