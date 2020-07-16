
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum ClusterStatus {
  
		[DataMember(Name = "green")] Green,
		[DataMember(Name = "yellow")] Yellow,
		[DataMember(Name = "red")] Red
	}
}
