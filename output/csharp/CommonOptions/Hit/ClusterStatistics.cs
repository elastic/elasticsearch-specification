using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class ClusterStatistics  {
		
		[DataMember(Name="skipped")]
		public int Skipped { get; set; }


		[DataMember(Name="successful")]
		public int Successful { get; set; }


		[DataMember(Name="total")]
		public int Total { get; set; }

	}
}
