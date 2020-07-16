
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum DfrAfterEffect {
  
		[DataMember(Name = "no")] No,
		[DataMember(Name = "b")] B,
		[DataMember(Name = "l")] L
	}
}
