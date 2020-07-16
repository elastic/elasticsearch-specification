using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ClearScrollRequest : RequestBase {
		
		[DataMember(Name="scroll_id")]
		public List<string> ScrollId { get; set; }

	}
}
