using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EnrichPolicy  {
		
		[DataMember(Name="enrich_fields")]
		public List<Field> EnrichFields { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }


		[DataMember(Name="match_field")]
		public Field MatchField { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }

	}
}
