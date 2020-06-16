@class_serializer("ShardStoreFormatter")
class ShardStore {
	allocation: ShardStoreAllocation;
	allocation_id: string;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	attributes: Dictionary<string, any>;
	id: string;
	legacy_version: long;
	name: string;
	store_exception: ShardStoreException;
	transport_address: string;
}
