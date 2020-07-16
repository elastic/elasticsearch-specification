using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class FieldLookup  {
		
		[DataMember(Name="id")]
		public Id Id { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="path")]
		public Field Path { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }

	}
}
