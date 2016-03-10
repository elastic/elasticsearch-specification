
/**namespace:Modules.SnapshotAndRestore.Restore */
interface SnapshotRestore {
	snapshot: string;
	indices: IndexName[];
	shards: ShardsMetaData;
}