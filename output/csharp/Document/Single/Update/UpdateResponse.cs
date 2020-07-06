using Nest.Search;
using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class UpdateResponse<TDocument> : WriteResponseBase {
		
		[DataMember(Name="get")]
		public InlineGet<TDocument> Get { get; set; }

	}
}
