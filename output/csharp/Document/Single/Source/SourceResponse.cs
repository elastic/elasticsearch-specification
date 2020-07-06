using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class SourceResponse<TDocument> : ResponseBase {
		
		[DataMember(Name="body")]
		public TDocument Body { get; set; }

	}
}
