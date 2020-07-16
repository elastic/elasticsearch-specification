using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackInfoRequest : RequestBase {
		
		[DataMember(Name="categories")]
		public List<string> Categories { get; set; }

	}
}
