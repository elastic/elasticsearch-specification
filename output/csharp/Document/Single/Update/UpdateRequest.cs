using Nest.Internal;
using Nest.Common;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class UpdateRequest<TDocument, TPartialDocument> : RequestBase {
		
		[DataMember(Name="if_primary_term")]
		public long IfPrimaryTerm { get; set; }


		[DataMember(Name="if_sequence_number")]
		public long IfSequenceNumber { get; set; }


		[DataMember(Name="lang")]
		public string Lang { get; set; }


		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="retry_on_conflict")]
		public long RetryOnConflict { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="source_enabled")]
		public bool SourceEnabled { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="detect_noop")]
		public bool DetectNoop { get; set; }


		[DataMember(Name="doc")]
		public TPartialDocument Doc { get; set; }


		[DataMember(Name="doc_as_upsert")]
		public bool DocAsUpsert { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="scripted_upsert")]
		public bool ScriptedUpsert { get; set; }


		[DataMember(Name="_source")]
		public Union<bool, SourceFilter> Source { get; set; }


		[DataMember(Name="upsert")]
		public TDocument Upsert { get; set; }

	}
}
