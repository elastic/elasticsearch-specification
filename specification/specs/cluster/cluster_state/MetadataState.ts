class MetadataState {
	templates: Dictionary<string, TemplateMapping>;
	cluster_uuid: string;
	indices: Dictionary<string, MetadataIndexState>;
}
