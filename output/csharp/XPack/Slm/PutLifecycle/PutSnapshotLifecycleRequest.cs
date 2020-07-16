using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutSnapshotLifecycleRequest : RequestBase {
		
		[DataMember(Name="config")]
		public SnapshotLifecycleConfig Config { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="repository")]
		public string Repository { get; set; }


		[DataMember(Name="retention")]
		public SnapshotRetentionConfiguration Retention { get; set; }


		[DataMember(Name="schedule")]
		public CronExpression Schedule { get; set; }

	}
}
