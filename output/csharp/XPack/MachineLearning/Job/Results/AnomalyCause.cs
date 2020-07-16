using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AnomalyCause  {
		
		[DataMember(Name="actual")]
		public List<double> Actual { get; set; }


		[DataMember(Name="by_field_name")]
		public string ByFieldName { get; set; }


		[DataMember(Name="by_field_value")]
		public string ByFieldValue { get; set; }


		[DataMember(Name="correlated_by_field_value")]
		public string CorrelatedByFieldValue { get; set; }


		[DataMember(Name="field_name")]
		public string FieldName { get; set; }


		[DataMember(Name="function")]
		public string Function { get; set; }


		[DataMember(Name="function_description")]
		public string FunctionDescription { get; set; }


		[DataMember(Name="influencers")]
		public List<Influence> Influencers { get; set; }


		[DataMember(Name="over_field_name")]
		public string OverFieldName { get; set; }


		[DataMember(Name="over_field_value")]
		public string OverFieldValue { get; set; }


		[DataMember(Name="partition_field_name")]
		public string PartitionFieldName { get; set; }


		[DataMember(Name="partition_field_value")]
		public string PartitionFieldValue { get; set; }


		[DataMember(Name="probability")]
		public double Probability { get; set; }


		[DataMember(Name="typical")]
		public List<double> Typical { get; set; }

	}
}
