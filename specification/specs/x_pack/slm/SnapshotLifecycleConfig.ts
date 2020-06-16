class SnapshotLifecycleConfig {
	ignore_unavailable: boolean;
	include_global_state: boolean;
	@prop_serializer("IndicesMultiSyntaxFormatter")
	indices: Indices;
}
