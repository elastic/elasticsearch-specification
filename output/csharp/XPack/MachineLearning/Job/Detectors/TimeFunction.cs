
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum TimeFunction {
  
		[DataMember(Name = "TimeOfDay")] TimeOfDay,
		[DataMember(Name = "TimeOfWeek")] TimeOfWeek
	}
}
