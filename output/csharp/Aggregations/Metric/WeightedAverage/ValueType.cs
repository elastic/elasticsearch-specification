
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum ValueType {
  
		[DataMember(Name = "string")] String,
		[DataMember(Name = "long")] Long,
		[DataMember(Name = "double")] Double,
		[DataMember(Name = "number")] Number,
		[DataMember(Name = "date")] Date,
		[DataMember(Name = "date_nanos")] DateNanos,
		[DataMember(Name = "ip")] Ip,
		[DataMember(Name = "numeric")] Numeric,
		[DataMember(Name = "geo_point")] GeoPoint,
		[DataMember(Name = "boolean")] Boolean
	}
}
