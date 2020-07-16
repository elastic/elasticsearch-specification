using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TermUserPrivileges  {
		
		[DataMember(Name="apps")]
		public bool Apps { get; set; }

	}
}
