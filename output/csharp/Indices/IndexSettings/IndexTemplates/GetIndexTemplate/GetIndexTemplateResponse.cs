using Nest.Indices;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetIndexTemplateResponse : DictionaryResponseBase<string, TemplateMapping> {
		
		[DataMember(Name="template_mappings")]
		public IDictionary<string, TemplateMapping> TemplateMappings { get; set; }

	}
}
