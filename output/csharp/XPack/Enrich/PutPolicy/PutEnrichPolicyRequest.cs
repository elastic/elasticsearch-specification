using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutEnrichPolicyRequest : RequestBase {
		
		[DataMember(Name="geo_match")]
		public EnrichPolicy GeoMatch { get; set; }


		[DataMember(Name="match")]
		public EnrichPolicy Match { get; set; }

	}
}
