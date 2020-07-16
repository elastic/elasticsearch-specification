
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum Conflicts {
  
		[DataMember(Name = "abort")] Abort,
		[DataMember(Name = "proceed")] Proceed
	}
}
