using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class LengthTokenFilter : TokenFilterBase {
		
		[DataMember(Name="max")]
		public int Max { get; set; }


		[DataMember(Name="min")]
		public int Min { get; set; }

	}
}
