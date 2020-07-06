using Nest.Internal;
using Nest.Modules;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class GenericProperty : DocValuesPropertyBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="fielddata")]
		public StringFielddata Fielddata { get; set; }


		[DataMember(Name="ignore_above")]
		public int IgnoreAbove { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="index_options")]
		public IndexOptions IndexOptions { get; set; }


		[DataMember(Name="norms")]
		public bool Norms { get; set; }


		[DataMember(Name="null_value")]
		public string NullValue { get; set; }


		[DataMember(Name="position_increment_gap")]
		public int PositionIncrementGap { get; set; }


		[DataMember(Name="search_analyzer")]
		public string SearchAnalyzer { get; set; }


		[DataMember(Name="term_vector")]
		public TermVectorOption TermVector { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
