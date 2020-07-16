
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum Month {
  
		[DataMember(Name = "january")] January,
		[DataMember(Name = "february")] February,
		[DataMember(Name = "march")] March,
		[DataMember(Name = "april")] April,
		[DataMember(Name = "may")] May,
		[DataMember(Name = "june")] June,
		[DataMember(Name = "july")] July,
		[DataMember(Name = "august")] August,
		[DataMember(Name = "september")] September,
		[DataMember(Name = "october")] October,
		[DataMember(Name = "november")] November,
		[DataMember(Name = "december")] December
	}
}
