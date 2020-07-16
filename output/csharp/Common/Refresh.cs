
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum Refresh {
  
		[DataMember(Name = "true")] True,
		[DataMember(Name = "false")] False,
		[DataMember(Name = "wait_for")] WaitFor
	}
}
