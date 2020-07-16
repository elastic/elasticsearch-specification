
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum DateInterval {
  
		[DataMember(Name = "second")] Second,
		[DataMember(Name = "minute")] Minute,
		[DataMember(Name = "hour")] Hour,
		[DataMember(Name = "day")] Day,
		[DataMember(Name = "week")] Week,
		[DataMember(Name = "month")] Month,
		[DataMember(Name = "quarter")] Quarter,
		[DataMember(Name = "year")] Year
	}
}
