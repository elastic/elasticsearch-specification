
/**namespace:Search.SearchShards */
interface SearchShard {
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	index: string;
}