using Nest.XPack;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SearchTransform  {
		
		[DataMember(Name="request")]
		public SearchInputRequest Request { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
