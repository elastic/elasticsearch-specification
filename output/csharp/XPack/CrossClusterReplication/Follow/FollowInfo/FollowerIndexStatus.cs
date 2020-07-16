
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum FollowerIndexStatus {
  
		[DataMember(Name = "active")] Active,
		[DataMember(Name = "paused")] Paused
	}
}
