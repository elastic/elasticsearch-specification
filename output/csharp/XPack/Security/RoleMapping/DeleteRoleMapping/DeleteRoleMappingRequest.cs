using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeleteRoleMappingRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }

	}
}
