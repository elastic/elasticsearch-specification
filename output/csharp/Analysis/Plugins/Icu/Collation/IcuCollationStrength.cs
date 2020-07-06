
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuCollationStrength {
  
		[DataMember(Name = "primary")] Primary,
		[DataMember(Name = "secondary")] Secondary,
		[DataMember(Name = "tertiary")] Tertiary,
		[DataMember(Name = "quaternary")] Quaternary,
		[DataMember(Name = "identical")] Identical
	}
}
