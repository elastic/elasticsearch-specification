using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RealmUsage : XPackUsage {
		
		[DataMember(Name="name")]
		public List<string> Name { get; set; }


		[DataMember(Name="order")]
		public List<long> Order { get; set; }


		[DataMember(Name="size")]
		public List<long> Size { get; set; }

	}
}
