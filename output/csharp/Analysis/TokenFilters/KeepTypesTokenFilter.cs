using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KeepTypesTokenFilter : TokenFilterBase {
		
		[DataMember(Name="mode")]
		public KeepTypesMode Mode { get; set; }


		[DataMember(Name="types")]
		public List<string> Types { get; set; }

	}
}
