using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PatternTokenizer : TokenizerBase {
		
		[DataMember(Name="flags")]
		public string Flags { get; set; }


		[DataMember(Name="group")]
		public int Group { get; set; }


		[DataMember(Name="pattern")]
		public string Pattern { get; set; }

	}
}
