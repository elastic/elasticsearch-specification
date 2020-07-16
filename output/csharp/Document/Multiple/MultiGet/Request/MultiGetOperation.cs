using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class MultiGetOperation  {
		
		[DataMember(Name="can_be_flattened")]
		public bool CanBeFlattened { get; set; }


		[DataMember(Name="_id")]
		public Id Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="routing")]
		public string Routing { get; set; }


		[DataMember(Name="_source")]
		public Union<bool, SourceFilter> Source { get; set; }


		[DataMember(Name="stored_fields")]
		public List<Field> StoredFields { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
