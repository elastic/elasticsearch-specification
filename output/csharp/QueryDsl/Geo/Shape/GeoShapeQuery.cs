using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoShapeQuery  {
		
		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="indexed_shape")]
		public FieldLookup IndexedShape { get; set; }


		[DataMember(Name="relation")]
		public GeoShapeRelation Relation { get; set; }


		[DataMember(Name="shape")]
		public GeoShape Shape { get; set; }

	}
}
