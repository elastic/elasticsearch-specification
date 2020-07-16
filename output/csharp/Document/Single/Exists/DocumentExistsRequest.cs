using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class DocumentExistsRequest : RequestBase {
		
		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="realtime")]
		public bool Realtime { get; set; }


		[DataMember(Name="refresh")]
		public bool Refresh { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="source_enabled")]
		public bool SourceEnabled { get; set; }


		[DataMember(Name="source_excludes")]
		public List<Field> SourceExcludes { get; set; }


		[DataMember(Name="source_includes")]
		public List<Field> SourceIncludes { get; set; }


		[DataMember(Name="stored_fields")]
		public List<Field> StoredFields { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
