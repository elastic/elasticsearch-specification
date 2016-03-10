
/**namespace:Cluster.NodesStats */
interface ThreadCountStats {
	threads: long;
	queue: long;
	active: long;
	rejected: long;
	largest: long;
	completed: long;
}