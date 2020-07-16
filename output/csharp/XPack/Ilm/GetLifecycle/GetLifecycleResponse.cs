using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetLifecycleResponse : DictionaryResponseBase<string, LifecyclePolicy> {
		
		[DataMember(Name="policies")]
		public IDictionary<string, LifecyclePolicy> Policies { get; set; }

	}
}
