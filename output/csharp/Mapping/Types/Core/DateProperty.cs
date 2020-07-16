using Nest.Internal;
using Nest.Modules;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class DateProperty : DocValuesPropertyBase {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="fielddata")]
		public NumericFielddata Fielddata { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="ignore_malformed")]
		public bool IgnoreMalformed { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="null_value")]
		public DateTimeOffset NullValue { get; set; }


		[DataMember(Name="precision_step")]
		public int PrecisionStep { get; set; }

	}
}
