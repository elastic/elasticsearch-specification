using Nest.Internal;
using Nest.Modules;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class NumberProperty : DocValuesPropertyBase {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="coerce")]
		public bool Coerce { get; set; }


		[DataMember(Name="fielddata")]
		public NumericFielddata Fielddata { get; set; }


		[DataMember(Name="ignore_malformed")]
		public bool IgnoreMalformed { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="null_value")]
		public double NullValue { get; set; }


		[DataMember(Name="scaling_factor")]
		public double ScalingFactor { get; set; }

	}
}
