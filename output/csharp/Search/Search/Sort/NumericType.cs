
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum NumericType {
  
		[DataMember(Name = "long")] Long,
		[DataMember(Name = "double")] Double,
		[DataMember(Name = "date")] Date,
		[DataMember(Name = "date_nanos")] DateNanos
	}
}
