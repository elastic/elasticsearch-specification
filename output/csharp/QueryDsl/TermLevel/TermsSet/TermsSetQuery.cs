using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class TermsSetQuery  {
		
		[DataMember(Name="minimum_should_match_field")]
		public Field MinimumShouldMatchField { get; set; }


		[DataMember(Name="minimum_should_match_script")]
		public Script MinimumShouldMatchScript { get; set; }


		[DataMember(Name="terms")]
		public List<object> Terms { get; set; }

	}
}
