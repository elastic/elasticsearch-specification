using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PartitionScore  {
		
		[DataMember(Name="initial_record_score")]
		public double InitialRecordScore { get; set; }


		[DataMember(Name="partition_field_name")]
		public string PartitionFieldName { get; set; }


		[DataMember(Name="partition_field_value")]
		public string PartitionFieldValue { get; set; }


		[DataMember(Name="probability")]
		public double Probability { get; set; }


		[DataMember(Name="record_score")]
		public double RecordScore { get; set; }

	}
}
