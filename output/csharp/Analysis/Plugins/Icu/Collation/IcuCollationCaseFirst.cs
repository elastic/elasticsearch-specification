
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuCollationCaseFirst {
  
		[DataMember(Name = "lower")] Lower,
		[DataMember(Name = "upper")] Upper
	}
}
