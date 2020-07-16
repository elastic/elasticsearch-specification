using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class AnalyzeToken  {
		
		[DataMember(Name="end_offset")]
		public long EndOffset { get; set; }


		[DataMember(Name="position")]
		public long Position { get; set; }


		[DataMember(Name="position_length")]
		public long PositionLength { get; set; }


		[DataMember(Name="start_offset")]
		public long StartOffset { get; set; }


		[DataMember(Name="token")]
		public string Token { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
