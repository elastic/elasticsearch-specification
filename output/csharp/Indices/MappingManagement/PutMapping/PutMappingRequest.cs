using Nest.Common;
using Nest.CommonOptions;
using Nest.Mapping;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class PutMappingRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_type_name")]
		public bool IncludeTypeName { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="all_field")]
		public AllField AllField { get; set; }


		[DataMember(Name="date_detection")]
		public bool DateDetection { get; set; }


		[DataMember(Name="dynamic")]
		public Union<bool, DynamicMapping> Dynamic { get; set; }


		[DataMember(Name="dynamic_date_formats")]
		public List<string> DynamicDateFormats { get; set; }


		[DataMember(Name="dynamic_templates")]
		public IDictionary<string, DynamicTemplate> DynamicTemplates { get; set; }


		[DataMember(Name="field_names_field")]
		public FieldNamesField FieldNamesField { get; set; }


		[DataMember(Name="index_field")]
		public IndexField IndexField { get; set; }


		[DataMember(Name="meta")]
		public IDictionary<string, object> Meta { get; set; }


		[DataMember(Name="numeric_detection")]
		public bool NumericDetection { get; set; }


		[DataMember(Name="properties")]
		public IDictionary<PropertyName, IProperty> Properties { get; set; }


		[DataMember(Name="routing_field")]
		public RoutingField RoutingField { get; set; }


		[DataMember(Name="size_field")]
		public SizeField SizeField { get; set; }


		[DataMember(Name="source_field")]
		public SourceField SourceField { get; set; }

	}
}
