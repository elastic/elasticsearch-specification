using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class MultiGetResponse : IResponse {
		
		[DataMember(Name="hits")]
		public List<MultiGetHit<object>> Hits { get; set; }

	}
}
