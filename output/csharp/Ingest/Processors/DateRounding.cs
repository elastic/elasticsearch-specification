
using System.Runtime.Serialization;

namespace Nest.Ingest {

	public enum DateRounding {
  
		[DataMember(Name = "s")] Seconds,
		[DataMember(Name = "m")] Minutes,
		[DataMember(Name = "h")] Hours,
		[DataMember(Name = "d")] Days,
		[DataMember(Name = "w")] Weeks,
		[DataMember(Name = "M")] Months,
		[DataMember(Name = "y")] Years
	}
}
