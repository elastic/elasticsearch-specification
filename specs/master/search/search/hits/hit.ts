
/**namespace:Search.Search.Hits */
interface hit<t> {
	Fields: map<string, any>[];
	Source: t;
	Index: string;
	Type: string;
	Version: long;
	Score: double;
	Id: string;
	Parent: string;
	Routing: string;
	Timestamp: long;
	Ttl: long;
	Sorts: any[];
	Highlights: map<string, highlight_hit>[];
	Explanation: explanation;
	MatchedQueries: string[];
	InnerHits: map<string, inner_hits_result>[];
}