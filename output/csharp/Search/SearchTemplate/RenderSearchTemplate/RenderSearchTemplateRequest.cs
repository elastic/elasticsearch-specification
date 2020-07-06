using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class RenderSearchTemplateRequest : RequestBase {
		
		[DataMember(Name="file")]
		public string File { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="source")]
		public string Source { get; set; }

	}
}
