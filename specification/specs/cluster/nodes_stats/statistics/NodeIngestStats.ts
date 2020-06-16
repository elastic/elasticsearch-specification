class NodeIngestStats {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	pipelines: Dictionary<string, IngestStats>;
	total: IngestStats;
}
