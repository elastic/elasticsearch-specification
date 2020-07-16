using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetFieldMappingResponse : DictionaryResponseBase<IndexName, TypeFieldMappings> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, TypeFieldMappings> Indices { get; set; }

	}
}
