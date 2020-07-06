using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class PutIndexTemplateRequest : RequestBase {
		
		[DataMember(Name="create")]
		public bool Create { get; set; }


		[DataMember(Name="flat_settings")]
		public bool FlatSettings { get; set; }


		[DataMember(Name="include_type_name")]
		public bool IncludeTypeName { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


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
