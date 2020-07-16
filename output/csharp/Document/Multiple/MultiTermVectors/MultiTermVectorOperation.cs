using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Document;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class MultiTermVectorOperation  {
		
		[DataMember(Name="doc")]
		public object Doc { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="field_statistics")]
		public bool FieldStatistics { get; set; }


		[DataMember(Name="filter")]
		public TermVectorFilter Filter { get; set; }


		[DataMember(Name="_id")]
		public Id Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="offsets")]
		public bool Offsets { get; set; }


		[DataMember(Name="payloads")]
		public bool Payloads { get; set; }


		[DataMember(Name="positions")]
		public bool Positions { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="term_statistics")]
		public bool TermStatistics { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
