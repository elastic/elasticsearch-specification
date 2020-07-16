using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class ShardStatistics  {
		
		[DataMember(Name="failed")]
		public int Failed { get; set; }


		[DataMember(Name="failures")]
		public List<ShardFailure> Failures { get; set; }


		[DataMember(Name="successful")]
		public int Successful { get; set; }


		[DataMember(Name="total")]
		public int Total { get; set; }

	}
}
