using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Datafeeds  {
		
		[DataMember(Name="scroll_size")]
		public int ScrollSize { get; set; }

	}
}
