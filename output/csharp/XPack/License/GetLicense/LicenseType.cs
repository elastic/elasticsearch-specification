
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum LicenseType {
  
		[DataMember(Name = "missing")] Missing,
		[DataMember(Name = "trial")] Trial,
		[DataMember(Name = "basic")] Basic,
		[DataMember(Name = "standard")] Standard,
		[DataMember(Name = "dev")] Dev,
		[DataMember(Name = "silver")] Silver,
		[DataMember(Name = "gold")] Gold,
		[DataMember(Name = "platinum")] Platinum,
		[DataMember(Name = "enterprise")] Enterprise
	}
}
