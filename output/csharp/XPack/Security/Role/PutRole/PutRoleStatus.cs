using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleStatus  {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }

	}
}
