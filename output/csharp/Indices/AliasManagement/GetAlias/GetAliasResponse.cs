using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetAliasResponse : DictionaryResponseBase<IndexName, IndexAliases> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, IndexAliases> Indices { get; set; }

	}
}
