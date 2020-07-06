using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackFeatures  {
		
		[DataMember(Name="analytics")]
		public XPackFeature Analytics { get; set; }


		[DataMember(Name="ccr")]
		public XPackFeature Ccr { get; set; }


		[DataMember(Name="data_frame")]
		public XPackFeature DataFrame { get; set; }


		[DataMember(Name="data_science")]
		public XPackFeature DataScience { get; set; }


		[DataMember(Name="enrich")]
		public XPackFeature Enrich { get; set; }


		[DataMember(Name="flattened")]
		public XPackFeature Flattened { get; set; }


		[DataMember(Name="frozen_indices")]
		public XPackFeature FrozenIndices { get; set; }


		[DataMember(Name="graph")]
		public XPackFeature Graph { get; set; }


		[DataMember(Name="ilm")]
		public XPackFeature Ilm { get; set; }


		[DataMember(Name="logstash")]
		public XPackFeature Logstash { get; set; }


		[DataMember(Name="ml")]
		public XPackFeature Ml { get; set; }


		[DataMember(Name="monitoring")]
		public XPackFeature Monitoring { get; set; }


		[DataMember(Name="rollup")]
		public XPackFeature Rollup { get; set; }


		[DataMember(Name="security")]
		public XPackFeature Security { get; set; }


		[DataMember(Name="slm")]
		public XPackFeature Slm { get; set; }


		[DataMember(Name="spatial")]
		public XPackFeature Spatial { get; set; }


		[DataMember(Name="sql")]
		public XPackFeature Sql { get; set; }


		[DataMember(Name="transform")]
		public XPackFeature Transform { get; set; }


		[DataMember(Name="vectors")]
		public XPackFeature Vectors { get; set; }


		[DataMember(Name="voting_only")]
		public XPackFeature VotingOnly { get; set; }


		[DataMember(Name="watcher")]
		public XPackFeature Watcher { get; set; }

	}
}
