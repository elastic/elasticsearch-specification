using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Collector  {
		
		[DataMember(Name="children")]
		public List<Collector> Children { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="time_in_nanos")]
		public long TimeInNanos { get; set; }

	}
}
