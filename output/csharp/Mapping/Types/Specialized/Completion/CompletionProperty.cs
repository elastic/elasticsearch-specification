using Nest.Mapping;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class CompletionProperty : DocValuesPropertyBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="contexts")]
		public List<SuggestContext> Contexts { get; set; }


		[DataMember(Name="max_input_length")]
		public int MaxInputLength { get; set; }


		[DataMember(Name="preserve_position_increments")]
		public bool PreservePositionIncrements { get; set; }


		[DataMember(Name="preserve_separators")]
		public bool PreserveSeparators { get; set; }


		[DataMember(Name="search_analyzer")]
		public string SearchAnalyzer { get; set; }

	}
}
