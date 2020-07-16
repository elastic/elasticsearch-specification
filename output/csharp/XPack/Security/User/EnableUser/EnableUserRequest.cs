using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EnableUserRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }

	}
}
