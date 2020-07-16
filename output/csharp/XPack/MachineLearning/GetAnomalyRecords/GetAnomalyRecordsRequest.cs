using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetAnomalyRecordsRequest : RequestBase {
		
		[DataMember(Name="desc")]
		public bool Desc { get; set; }


		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="exclude_interim")]
		public bool ExcludeInterim { get; set; }


		[DataMember(Name="page")]
		public Page Page { get; set; }


		[DataMember(Name="record_score")]
		public double RecordScore { get; set; }


		[DataMember(Name="sort")]
		public Field Sort { get; set; }


		[DataMember(Name="start")]
		public DateTimeOffset Start { get; set; }

	}
}
