using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FoundUserPrivilege  {
		
		[DataMember(Name="found")]
		public bool Found { get; set; }

	}
}
