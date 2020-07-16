using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetMappingResponse : DictionaryResponseBase<IndexName, IndexMappings> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, IndexMappings> Indices { get; set; }

	}
}
