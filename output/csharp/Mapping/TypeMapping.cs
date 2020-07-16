using Nest.Mapping;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class TypeMapping  {
		
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


		[DataMember(Name="_field_names")]
		public FieldNamesField FieldNames { get; set; }


		[DataMember(Name="index_field")]
		public IndexField IndexField { get; set; }


		[DataMember(Name="_meta")]
		public IDictionary<string, object> Meta { get; set; }


		[DataMember(Name="numeric_detection")]
		public bool NumericDetection { get; set; }


		[DataMember(Name="properties")]
		public IDictionary<PropertyName, IProperty> Properties { get; set; }


		[DataMember(Name="_routing")]
		public RoutingField Routing { get; set; }


		[DataMember(Name="_size")]
		public SizeField Size { get; set; }


		[DataMember(Name="_source")]
		public SourceField Source { get; set; }

	}
}
