using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackFeature  {
		
		[DataMember(Name="available")]
		public bool Available { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="native_code_info")]
		public NativeCodeInformation NativeCodeInfo { get; set; }

	}
}
