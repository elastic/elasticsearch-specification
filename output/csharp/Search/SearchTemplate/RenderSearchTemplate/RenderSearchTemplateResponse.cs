using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class RenderSearchTemplateResponse : IResponse {
		
		[DataMember(Name="template_output")]
		public LazyDocument TemplateOutput { get; set; }

	}
}
