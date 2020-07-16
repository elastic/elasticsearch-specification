
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum WaitForStatus {
  
		[DataMember(Name = "green")] Green,
		[DataMember(Name = "yellow")] Yellow,
		[DataMember(Name = "red")] Red
	}
}
