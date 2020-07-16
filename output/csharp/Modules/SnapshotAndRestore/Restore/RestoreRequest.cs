using Nest.CommonOptions;
using Nest.Indices;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class RestoreRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }


		[DataMember(Name="ignore_index_settings")]
		public List<string> IgnoreIndexSettings { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_aliases")]
		public bool IncludeAliases { get; set; }


		[DataMember(Name="include_global_state")]
		public bool IncludeGlobalState { get; set; }


		[DataMember(Name="index_settings")]
		public UpdateIndexSettingsRequest IndexSettings { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }


		[DataMember(Name="partial")]
		public bool Partial { get; set; }


		[DataMember(Name="rename_pattern")]
		public string RenamePattern { get; set; }


		[DataMember(Name="rename_replacement")]
		public string RenameReplacement { get; set; }

	}
}
