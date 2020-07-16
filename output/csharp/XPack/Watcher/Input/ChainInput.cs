using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ChainInput  {
		
		[DataMember(Name="inputs")]
		public IDictionary<string, InputContainer> Inputs { get; set; }

	}
}
