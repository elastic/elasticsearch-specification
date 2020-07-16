using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Policy  {
		
		[DataMember(Name="phases")]
		public Phases Phases { get; set; }

	}
}
