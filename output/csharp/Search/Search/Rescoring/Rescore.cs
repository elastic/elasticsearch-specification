using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Rescore  {
		
		[DataMember(Name="query")]
		public RescoreQuery Query { get; set; }


		[DataMember(Name="window_size")]
		public int WindowSize { get; set; }

	}
}
