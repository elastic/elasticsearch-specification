class ShardStore {
	allocation: ShardStoreAllocation;
	allocation_id: string;
	attributes: Dictionary<string, any>;
	id: string;
	legacy_version: long;
	name: string;
	store_exception: ShardStoreException;
	transport_address: string;
}
