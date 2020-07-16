using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class QueryUsage  {
		
		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="failed")]
		public int Failed { get; set; }


		[DataMember(Name="paging")]
		public int Paging { get; set; }


		[DataMember(Name="total")]
		public int Total { get; set; }

	}
}
