using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.IndexModules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetIndexSettingsResponse : DictionaryResponseBase<IndexName, IndexState> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, IndexState> Indices { get; set; }

	}
}
