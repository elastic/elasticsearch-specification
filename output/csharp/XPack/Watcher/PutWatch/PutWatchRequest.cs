using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutWatchRequest : RequestBase {
		
		[DataMember(Name="active")]
		public bool Active { get; set; }


		[DataMember(Name="if_primary_term")]
		public long IfPrimaryTerm { get; set; }


		[DataMember(Name="if_sequence_number")]
		public long IfSequenceNumber { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="actions")]
		public IDictionary<string, Action> Actions { get; set; }


		[DataMember(Name="condition")]
		public ConditionContainer Condition { get; set; }


		[DataMember(Name="input")]
		public InputContainer Input { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="throttle_period")]
		public string ThrottlePeriod { get; set; }


		[DataMember(Name="transform")]
		public TransformContainer Transform { get; set; }


		[DataMember(Name="trigger")]
		public TriggerContainer Trigger { get; set; }

	}
}
