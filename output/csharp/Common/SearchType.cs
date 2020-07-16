
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum SearchType {
  
		[DataMember(Name = "query_then_fetch")] QueryThenFetch,
		[DataMember(Name = "dfs_query_then_fetch")] DfsQueryThenFetch
	}
}
