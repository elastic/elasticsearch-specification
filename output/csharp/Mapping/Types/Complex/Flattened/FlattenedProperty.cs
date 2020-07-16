using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class FlattenedProperty : PropertyBase {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="depth_limit")]
		public int DepthLimit { get; set; }


		[DataMember(Name="doc_values")]
		public bool DocValues { get; set; }


		[DataMember(Name="eager_global_ordinals")]
		public bool EagerGlobalOrdinals { get; set; }


		[DataMember(Name="ignore_above")]
		public int IgnoreAbove { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="index_options")]
		public IndexOptions IndexOptions { get; set; }


		[DataMember(Name="null_value")]
		public string NullValue { get; set; }


		[DataMember(Name="similarity")]
		public string Similarity { get; set; }


		[DataMember(Name="split_queries_on_whitespace")]
		public bool SplitQueriesOnWhitespace { get; set; }

	}
}
