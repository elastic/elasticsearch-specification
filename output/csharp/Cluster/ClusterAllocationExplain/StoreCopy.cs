
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum StoreCopy {
  
		[DataMember(Name = "NONE")] None,
		[DataMember(Name = "AVAILABLE")] Available,
		[DataMember(Name = "CORRUPT")] Corrupt,
		[DataMember(Name = "IO_ERROR")] IoError,
		[DataMember(Name = "STALE")] Stale,
		[DataMember(Name = "UNKNOWN")] Unknown
	}
}
