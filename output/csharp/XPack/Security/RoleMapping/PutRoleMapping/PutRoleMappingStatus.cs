using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleMappingStatus  {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }

	}
}
