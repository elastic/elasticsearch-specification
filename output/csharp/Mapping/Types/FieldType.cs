
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum FieldType {
  
		[DataMember(Name = "none")] None,
		[DataMember(Name = "geo_point")] GeoPoint,
		[DataMember(Name = "geo_shape")] GeoShape,
		[DataMember(Name = "ip")] Ip,
		[DataMember(Name = "binary")] Binary,
		[DataMember(Name = "keyword")] Keyword,
		[DataMember(Name = "text")] Text,
		[DataMember(Name = "search_as_you_type")] SearchAsYouType,
		[DataMember(Name = "date")] Date,
		[DataMember(Name = "date_nanos")] DateNanos,
		[DataMember(Name = "boolean")] Boolean,
		[DataMember(Name = "completion")] Completion,
		[DataMember(Name = "nested")] Nested,
		[DataMember(Name = "object")] Object,
		[DataMember(Name = "murmur3")] Murmur3,
		[DataMember(Name = "token_count")] TokenCount,
		[DataMember(Name = "percolator")] Percolator,
		[DataMember(Name = "integer")] Integer,
		[DataMember(Name = "long")] Long,
		[DataMember(Name = "short")] Short,
		[DataMember(Name = "byte")] Byte,
		[DataMember(Name = "float")] Float,
		[DataMember(Name = "half_float")] HalfFloat,
		[DataMember(Name = "scaled_float")] ScaledFloat,
		[DataMember(Name = "double")] Double,
		[DataMember(Name = "integer_range")] IntegerRange,
		[DataMember(Name = "float_range")] FloatRange,
		[DataMember(Name = "long_range")] LongRange,
		[DataMember(Name = "double_range")] DoubleRange,
		[DataMember(Name = "date_range")] DateRange,
		[DataMember(Name = "ip_range")] IpRange,
		[DataMember(Name = "alias")] Alias,
		[DataMember(Name = "join")] Join,
		[DataMember(Name = "rank_feature")] RankFeature,
		[DataMember(Name = "rank_features")] RankFeatures,
		[DataMember(Name = "flattened")] Flattened,
		[DataMember(Name = "shape")] Shape,
		[DataMember(Name = "histogram")] Histogram,
		[DataMember(Name = "constant_keyword")] ConstantKeyword
	}
}
