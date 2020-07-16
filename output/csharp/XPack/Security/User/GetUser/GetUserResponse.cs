using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetUserResponse : DictionaryResponseBase<string, XPackUser> {
		
		[DataMember(Name="users")]
		public IDictionary<string, XPackUser> Users { get; set; }

	}
}
