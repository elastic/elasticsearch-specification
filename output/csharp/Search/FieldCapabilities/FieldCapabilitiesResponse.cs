using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class FieldCapabilitiesResponse : IResponse {
		
		[DataMember(Name="fields")]
		public IDictionary<Field, IDictionary<string, FieldCapabilities>> Fields { get; set; }

	}
}
