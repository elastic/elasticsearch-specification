using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CompareCondition  {
		
		[DataMember(Name="comparison")]
		public string Comparison { get; set; }


		[DataMember(Name="path")]
		public string Path { get; set; }


		[DataMember(Name="value")]
		public object Value { get; set; }

	}
}
