using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class NamedPolicy : EnrichPolicy {
		
		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
