using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class QueryUserPrivileges  {
		
		[DataMember(Name="term")]
		public TermUserPrivileges Term { get; set; }

	}
}
