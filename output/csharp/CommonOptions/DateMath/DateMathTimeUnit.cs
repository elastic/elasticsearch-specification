
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum DateMathTimeUnit {
  
		[DataMember(Name = "s")] Second,
		[DataMember(Name = "m")] Minute,
		[DataMember(Name = "h")] Hour,
		[DataMember(Name = "d")] Day,
		[DataMember(Name = "w")] Week,
		[DataMember(Name = "M")] Month,
		[DataMember(Name = "y")] Year
	}
}
