using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeStatistics  {
		
		[DataMember(Name="failed")]
		public int Failed { get; set; }


		[DataMember(Name="failures")]
		public List<ErrorCause> Failures { get; set; }


		[DataMember(Name="successful")]
		public int Successful { get; set; }


		[DataMember(Name="total")]
		public int Total { get; set; }

	}
}
