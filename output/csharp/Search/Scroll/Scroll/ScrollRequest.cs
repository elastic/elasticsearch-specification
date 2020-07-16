using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ScrollRequest : RequestBase {
		
		[DataMember(Name="total_hits_as_integer")]
		public bool TotalHitsAsInteger { get; set; }


		[DataMember(Name="scroll")]
		public Time Scroll { get; set; }


		[DataMember(Name="scroll_id")]
		public string ScrollId { get; set; }

	}
}
