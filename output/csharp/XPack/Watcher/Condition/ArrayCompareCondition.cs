using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ArrayCompareCondition  {
		
		[DataMember(Name="array_path")]
		public string ArrayPath { get; set; }


		[DataMember(Name="comparison")]
		public string Comparison { get; set; }


		[DataMember(Name="path")]
		public string Path { get; set; }


		[DataMember(Name="quantifier")]
		public Quantifier Quantifier { get; set; }


		[DataMember(Name="value")]
		public object Value { get; set; }

	}
}
