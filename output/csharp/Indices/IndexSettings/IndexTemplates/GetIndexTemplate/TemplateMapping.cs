using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class TemplateMapping  {
		
		[DataMember(Name="aliases")]
		public IDictionary<IndexName, Alias> Aliases { get; set; }


		[DataMember(Name="index_patterns")]
		public List<string> IndexPatterns { get; set; }


		[DataMember(Name="mappings")]
		public TypeMapping Mappings { get; set; }


		[DataMember(Name="order")]
		public int Order { get; set; }


		[DataMember(Name="settings")]
		public IDictionary<string, object> Settings { get; set; }


		[DataMember(Name="version")]
		public int Version { get; set; }

	}
}
