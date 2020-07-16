using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class FieldCapabilities  {
		
		[DataMember(Name="aggregatable")]
		public bool Aggregatable { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }


		[DataMember(Name="meta")]
		public IDictionary<string, List<string>> Meta { get; set; }


		[DataMember(Name="non_aggregatable_indices")]
		public IndicesNames NonAggregatableIndices { get; set; }


		[DataMember(Name="non_searchable_indices")]
		public IndicesNames NonSearchableIndices { get; set; }


		[DataMember(Name="searchable")]
		public bool Searchable { get; set; }

	}
}
