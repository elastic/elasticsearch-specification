using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class TypeFieldMappings  {
		
		[DataMember(Name="mappings")]
		public IDictionary<Field, FieldMapping> Mappings { get; set; }

	}
}
