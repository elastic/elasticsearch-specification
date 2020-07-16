
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum LicenseStatus {
  
		[DataMember(Name = "active")] Active,
		[DataMember(Name = "valid")] Valid,
		[DataMember(Name = "invalid")] Invalid,
		[DataMember(Name = "expired")] Expired
	}
}
