using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class CircuitBreakerSettings  {
		
		[DataMember(Name="fielddata_limit")]
		public string FielddataLimit { get; set; }


		[DataMember(Name="fielddata_overhead")]
		public float FielddataOverhead { get; set; }


		[DataMember(Name="request_limit")]
		public string RequestLimit { get; set; }


		[DataMember(Name="request_overhead")]
		public float RequestOverhead { get; set; }


		[DataMember(Name="total_limit")]
		public string TotalLimit { get; set; }

	}
}
