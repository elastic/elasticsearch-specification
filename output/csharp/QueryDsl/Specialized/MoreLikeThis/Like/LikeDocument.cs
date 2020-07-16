using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class LikeDocument  {
		
		[DataMember(Name="doc")]
		public object Doc { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="_id")]
		public Id Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="per_field_analyzer")]
		public IDictionary<Field, string> PerFieldAnalyzer { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }

	}
}
