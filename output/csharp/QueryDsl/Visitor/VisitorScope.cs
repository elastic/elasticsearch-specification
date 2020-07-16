
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum VisitorScope {
  
		[DataMember(Name = "Unknown")] Unknown,
		[DataMember(Name = "Query")] Query,
		[DataMember(Name = "Filter")] Filter,
		[DataMember(Name = "Must")] Must,
		[DataMember(Name = "MustNot")] MustNot,
		[DataMember(Name = "Should")] Should,
		[DataMember(Name = "PositiveQuery")] PositiveQuery,
		[DataMember(Name = "NegativeQuery")] NegativeQuery,
		[DataMember(Name = "Span")] Span
	}
}
