
using System.Runtime.Serialization;

namespace Nest.Document {

	public enum Result {
  
		[DataMember(Name = "Error")] Error,
		[DataMember(Name = "created")] Created,
		[DataMember(Name = "updated")] Updated,
		[DataMember(Name = "deleted")] Deleted,
		[DataMember(Name = "not_found")] NotFound,
		[DataMember(Name = "noop")] Noop
	}
}
