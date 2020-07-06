
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum Level {
  
		[DataMember(Name = "cluster")] Cluster,
		[DataMember(Name = "indices")] Indices,
		[DataMember(Name = "shards")] Shards
	}
}
