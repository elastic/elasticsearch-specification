
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum Day {
  
		[DataMember(Name = "sunday")] Sunday,
		[DataMember(Name = "monday")] Monday,
		[DataMember(Name = "tuesday")] Tuesday,
		[DataMember(Name = "wednesday")] Wednesday,
		[DataMember(Name = "thursday")] Thursday,
		[DataMember(Name = "friday")] Friday,
		[DataMember(Name = "saturday")] Saturday
	}
}
