using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ExplainAnalyzeToken  {
		
		[DataMember(Name="bytes")]
		public string Bytes { get; set; }


		[DataMember(Name="end_offset")]
		public long EndOffset { get; set; }


		[DataMember(Name="keyword")]
		public bool Keyword { get; set; }


		[DataMember(Name="position")]
		public long Position { get; set; }


		[DataMember(Name="positionLength")]
		public long PositionLength { get; set; }


		[DataMember(Name="start_offset")]
		public long StartOffset { get; set; }


		[DataMember(Name="termFrequency")]
		public long TermFrequency { get; set; }


		[DataMember(Name="token")]
		public string Token { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
