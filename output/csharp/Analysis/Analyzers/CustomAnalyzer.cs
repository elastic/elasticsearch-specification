using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class CustomAnalyzer : AnalyzerBase {
		
		[DataMember(Name="char_filter")]
		public List<string> CharFilter { get; set; }


		[DataMember(Name="filter")]
		public List<string> Filter { get; set; }


		[DataMember(Name="position_increment_gap")]
		public int PositionIncrementGap { get; set; }


		[DataMember(Name="position_offset_gap")]
		public int PositionOffsetGap { get; set; }


		[DataMember(Name="tokenizer")]
		public string Tokenizer { get; set; }

	}
}
