
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum MinimumInterval {
  
		[DataMember(Name = "second")] Second,
		[DataMember(Name = "minute")] Minute,
		[DataMember(Name = "hour")] Hour,
		[DataMember(Name = "day")] Day,
		[DataMember(Name = "month")] Month,
		[DataMember(Name = "year")] Year
	}
}
