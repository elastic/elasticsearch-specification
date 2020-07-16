using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsMatch  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="max_gaps")]
		public int MaxGaps { get; set; }


		[DataMember(Name="ordered")]
		public bool Ordered { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="use_field")]
		public Field UseField { get; set; }

	}
}
