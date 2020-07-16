using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackUsageResponse : IResponse {
		
		[DataMember(Name="watcher")]
		public AlertingUsage Watcher { get; set; }


		[DataMember(Name="ccr")]
		public CcrUsage Ccr { get; set; }


		[DataMember(Name="data_frame")]
		public XPackUsage DataFrame { get; set; }


		[DataMember(Name="data_science")]
		public XPackUsage DataScience { get; set; }


		[DataMember(Name="enrich")]
		public XPackUsage Enrich { get; set; }


		[DataMember(Name="flattened")]
		public FlattenedUsage Flattened { get; set; }


		[DataMember(Name="graph")]
		public XPackUsage Graph { get; set; }


		[DataMember(Name="ilm")]
		public IlmUsage Ilm { get; set; }


		[DataMember(Name="logstash")]
		public XPackUsage Logstash { get; set; }


		[DataMember(Name="ml")]
		public MachineLearningUsage Ml { get; set; }


		[DataMember(Name="monitoring")]
		public MonitoringUsage Monitoring { get; set; }


		[DataMember(Name="rollup")]
		public XPackUsage Rollup { get; set; }


		[DataMember(Name="security")]
		public SecurityUsage Security { get; set; }


		[DataMember(Name="slm")]
		public SlmUsage Slm { get; set; }


		[DataMember(Name="sql")]
		public SqlUsage Sql { get; set; }


		[DataMember(Name="transform")]
		public XPackUsage Transform { get; set; }


		[DataMember(Name="vectors")]
		public VectorUsage Vectors { get; set; }


		[DataMember(Name="voting_only")]
		public XPackUsage VotingOnly { get; set; }

	}
}
