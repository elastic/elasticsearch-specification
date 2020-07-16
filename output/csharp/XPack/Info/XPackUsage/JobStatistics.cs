using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class JobStatistics  {
		
		[DataMember(Name="avg")]
		public double Avg { get; set; }


		[DataMember(Name="max")]
		public double Max { get; set; }


		[DataMember(Name="min")]
		public double Min { get; set; }


		[DataMember(Name="total")]
		public double Total { get; set; }

	}
}
