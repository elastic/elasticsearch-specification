
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum PhoneticNameType {
  
		[DataMember(Name = "generic")] Generic,
		[DataMember(Name = "ashkenazi")] Ashkenazi,
		[DataMember(Name = "sephardic")] Sephardic
	}
}
