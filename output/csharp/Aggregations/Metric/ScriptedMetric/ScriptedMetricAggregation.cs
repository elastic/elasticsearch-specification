using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ScriptedMetricAggregation  {
		
		[DataMember(Name="combine_script")]
		public Script CombineScript { get; set; }


		[DataMember(Name="init_script")]
		public Script InitScript { get; set; }


		[DataMember(Name="map_script")]
		public Script MapScript { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="reduce_script")]
		public Script ReduceScript { get; set; }

	}
}
