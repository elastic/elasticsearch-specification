
using System.Runtime.Serialization;

namespace Nest.Ingest {

	public enum UserAgentProperty {
  
		[DataMember(Name = "NAME")] Name,
		[DataMember(Name = "MAJOR")] Major,
		[DataMember(Name = "MINOR")] Minor,
		[DataMember(Name = "PATCH")] Patch,
		[DataMember(Name = "OS")] Os,
		[DataMember(Name = "OS_NAME")] OsName,
		[DataMember(Name = "OS_MAJOR")] OsMajor,
		[DataMember(Name = "OS_MINOR")] OsMinor,
		[DataMember(Name = "DEVICE")] Device,
		[DataMember(Name = "BUILD")] Build
	}
}
