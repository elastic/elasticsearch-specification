using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class TokenCountProperty : DocValuesPropertyBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="null_value")]
		public double NullValue { get; set; }

	}
}
