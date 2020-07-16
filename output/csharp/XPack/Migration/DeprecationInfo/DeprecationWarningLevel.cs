
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum DeprecationWarningLevel {
  
		[DataMember(Name = "none")] None,
		[DataMember(Name = "info")] Info,
		[DataMember(Name = "warning")] Warning,
		[DataMember(Name = "critical")] Critical
	}
}
