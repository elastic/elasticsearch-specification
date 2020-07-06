using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Filter  {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="filter_id")]
		public string FilterId { get; set; }


		[DataMember(Name="items")]
		public List<string> Items { get; set; }

	}
}
