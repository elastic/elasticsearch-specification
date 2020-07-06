using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PatternReplaceCharFilter : CharFilterBase {
		
		[DataMember(Name="flags")]
		public string Flags { get; set; }


		[DataMember(Name="pattern")]
		public string Pattern { get; set; }


		[DataMember(Name="replacement")]
		public string Replacement { get; set; }

	}
}
