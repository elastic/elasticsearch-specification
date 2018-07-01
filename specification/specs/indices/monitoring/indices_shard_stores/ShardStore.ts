@class_serializer("ShardStoreJsonConverter")
class ShardStore {
	id: string;
	name: string;
	transport_address: string;
	legacy_version: long;
	allocation_id: string;
	store_exception: ShardStoreException;
	allocation: ShardStoreAllocation;
	attributes: Map<string, any>;
}
