using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ShapeQuery  {
		
		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="indexed_shape")]
		public FieldLookup IndexedShape { get; set; }


		[DataMember(Name="relation")]
		public ShapeRelation Relation { get; set; }


		[DataMember(Name="shape")]
		public GeoShape Shape { get; set; }

	}
}
