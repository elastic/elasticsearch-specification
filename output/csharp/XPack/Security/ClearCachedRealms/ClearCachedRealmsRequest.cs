using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ClearCachedRealmsRequest : RequestBase {
		
		[DataMember(Name="usernames")]
		public List<string> Usernames { get; set; }

	}
}
