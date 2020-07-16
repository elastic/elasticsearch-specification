using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class JobForecastStatistics  {
		
		[DataMember(Name="memory_bytes")]
		public JobStatistics MemoryBytes { get; set; }


		[DataMember(Name="processing_time_ms")]
		public JobStatistics ProcessingTimeMs { get; set; }


		[DataMember(Name="records")]
		public JobStatistics Records { get; set; }


		[DataMember(Name="status")]
		public IDictionary<string, long> Status { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }

	}
}
