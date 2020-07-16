using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class NativeCodeInformation  {
		
		[DataMember(Name="build_hash")]
		public string BuildHash { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
