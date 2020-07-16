using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutFilterRequest : RequestBase {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="items")]
		public List<string> Items { get; set; }

	}
}
