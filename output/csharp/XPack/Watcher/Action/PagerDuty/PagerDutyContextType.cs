
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum PagerDutyContextType {
  
		[DataMember(Name = "link")] Link,
		[DataMember(Name = "image")] Image
	}
}
