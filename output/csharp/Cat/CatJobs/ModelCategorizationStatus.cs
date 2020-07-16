
using System.Runtime.Serialization;

namespace Nest.Cat {

	public enum ModelCategorizationStatus {
  
		[DataMember(Name = "ok")] Ok,
		[DataMember(Name = "warn")] Warn
	}
}
