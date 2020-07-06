using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardGet  {
		
		[DataMember(Name="current")]
		public long Current { get; set; }


		[DataMember(Name="exists_time_in_millis")]
		public long ExistsTimeInMillis { get; set; }


		[DataMember(Name="exists_total")]
		public long ExistsTotal { get; set; }


		[DataMember(Name="missing_time_in_millis")]
		public long MissingTimeInMillis { get; set; }


		[DataMember(Name="missing_total")]
		public long MissingTotal { get; set; }


		[DataMember(Name="time_in_millis")]
		public long TimeInMillis { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }

	}
}
