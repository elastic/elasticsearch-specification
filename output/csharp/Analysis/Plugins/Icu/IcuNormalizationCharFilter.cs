using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuNormalizationCharFilter : CharFilterBase {
		
		[DataMember(Name="mode")]
		public IcuNormalizationMode Mode { get; set; }


		[DataMember(Name="name")]
		public IcuNormalizationType Name { get; set; }

	}
}
