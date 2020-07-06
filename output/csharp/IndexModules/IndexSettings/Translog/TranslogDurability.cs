
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum TranslogDurability {
  
		[DataMember(Name = "request")] Request,
		[DataMember(Name = "async")] Async
	}
}
