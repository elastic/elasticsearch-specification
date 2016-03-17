
/**namespace:Search.SearchShards */
interface search_shard {
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	index: string;
}