using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class PercolateQuery  {
		
		[DataMember(Name="document")]
		public object Document { get; set; }


		[DataMember(Name="documents")]
		public List<object> Documents { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="id")]
		public Id Id { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }

	}
}
