using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IndexActionResult  {
		
		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="response")]
		public IndexActionResultIndexResponse Response { get; set; }

	}
}
