using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchNode  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }

	}
}
