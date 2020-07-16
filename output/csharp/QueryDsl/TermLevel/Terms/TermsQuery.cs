using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class TermsQuery  {
		
		[DataMember(Name="terms")]
		public List<object> Terms { get; set; }


		[DataMember(Name="terms_lookup")]
		public FieldLookup TermsLookup { get; set; }

	}
}
