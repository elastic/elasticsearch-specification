using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexRethrottleResponse : IResponse {
		
		[DataMember(Name="nodes")]
		public IDictionary<string, ReindexNode> Nodes { get; set; }

	}
}
