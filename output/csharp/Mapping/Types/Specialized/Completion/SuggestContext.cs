using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class SuggestContext  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="path")]
		public Field Path { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
