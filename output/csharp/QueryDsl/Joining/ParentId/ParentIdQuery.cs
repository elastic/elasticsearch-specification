using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ParentIdQuery  {
		
		[DataMember(Name="id")]
		public Id Id { get; set; }


		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="type")]
		public RelationName Type { get; set; }

	}
}
