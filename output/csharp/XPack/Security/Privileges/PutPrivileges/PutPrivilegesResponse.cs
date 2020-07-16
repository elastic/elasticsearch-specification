using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutPrivilegesResponse : DictionaryResponseBase<string, IDictionary<string, PutPrivilegesStatus>> {
		
		[DataMember(Name="applications")]
		public IDictionary<string, IDictionary<string, PutPrivilegesStatus>> Applications { get; set; }

	}
}
