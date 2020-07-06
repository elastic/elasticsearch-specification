using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class TermVector  {
		
		[DataMember(Name="field_statistics")]
		public FieldStatistics FieldStatistics { get; set; }


		[DataMember(Name="terms")]
		public IDictionary<string, TermVectorTerm> Terms { get; set; }

	}
}
