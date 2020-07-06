using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class NamedPolicyMetadata  {
		
		[DataMember(Name="config")]
		public NamedPolicyConfig Config { get; set; }

	}
}
