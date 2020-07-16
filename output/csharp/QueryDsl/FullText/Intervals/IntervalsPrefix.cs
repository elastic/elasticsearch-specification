using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsPrefix  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="prefix")]
		public string Prefix { get; set; }


		[DataMember(Name="use_field")]
		public Field UseField { get; set; }

	}
}
