using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleResponse : IResponse {
		
		[DataMember(Name="role")]
		public PutRoleStatus Role { get; set; }

	}
}
