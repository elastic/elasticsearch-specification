using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class GeoTileGridAggregation  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="precision")]
		public GeoTilePrecision Precision { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
