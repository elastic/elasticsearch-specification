class CatThreadPoolRecord implements ICatRecord {
	@prop_serializer("StringIntFormatter")
	active: integer;
	@prop_serializer("NullableStringLongFormatter")
	completed: long;
	@prop_serializer("NullableStringIntFormatter")
	core: integer;
	ephemeral_node_id: string;
	host: string;
	ip: string;
	keep_alive: Time;
	@prop_serializer("NullableStringIntFormatter")
	largest: integer;
	@prop_serializer("NullableStringIntFormatter")
	max: integer;
	name: string;
	node_id: string;
	node_name: string;
	@prop_serializer("NullableStringIntFormatter")
	pool_size: integer;
	@prop_serializer("NullableStringIntFormatter")
	port: integer;
	@prop_serializer("NullableStringIntFormatter")
	pid: integer;
	@prop_serializer("StringIntFormatter")
	queue: integer;
	@prop_serializer("NullableStringIntFormatter")
	queue_size: integer;
	@prop_serializer("StringLongFormatter")
	rejected: long;
	@prop_serializer("NullableStringIntFormatter")
	size: integer;
	type: string;
}
