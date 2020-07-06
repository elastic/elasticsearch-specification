using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class ElisionTokenFilter : TokenFilterBase {
		
		[DataMember(Name="articles")]
		public List<string> Articles { get; set; }


		[DataMember(Name="articles_case")]
		public bool ArticlesCase { get; set; }

	}
}
