
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum VersionType {
  
		[DataMember(Name = "internal")] Internal,
		[DataMember(Name = "external")] External,
		[DataMember(Name = "external_gte")] ExternalGte,
		[DataMember(Name = "force")] Force
	}
}
