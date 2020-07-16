using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleMappingResponse : IResponse {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }


		[DataMember(Name="role_mapping")]
		public PutRoleMappingStatus RoleMapping { get; set; }

	}
}
