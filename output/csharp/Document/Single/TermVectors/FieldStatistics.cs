using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class FieldStatistics  {
		
		[DataMember(Name="doc_count")]
		public int DocCount { get; set; }


		[DataMember(Name="sum_doc_freq")]
		public long SumDocFreq { get; set; }


		[DataMember(Name="sum_ttf")]
		public long SumTtf { get; set; }

	}
}
