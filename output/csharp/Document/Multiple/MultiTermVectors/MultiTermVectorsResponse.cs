using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class MultiTermVectorsResponse : IResponse {
		
		[DataMember(Name="docs")]
		public List<TermVectorsResult> Docs { get; set; }

	}
}
