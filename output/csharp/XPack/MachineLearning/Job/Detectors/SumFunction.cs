
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum SumFunction {
  
		[DataMember(Name = "Sum")] Sum,
		[DataMember(Name = "HighSum")] HighSum,
		[DataMember(Name = "LowSum")] LowSum
	}
}
