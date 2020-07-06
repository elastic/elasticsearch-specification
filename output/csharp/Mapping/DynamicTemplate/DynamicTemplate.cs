using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class DynamicTemplate  {
		
		[DataMember(Name="mapping")]
		public IProperty Mapping { get; set; }


		[DataMember(Name="match")]
		public string Match { get; set; }


		[DataMember(Name="match_mapping_type")]
		public string MatchMappingType { get; set; }


		[DataMember(Name="match_pattern")]
		public MatchType MatchPattern { get; set; }


		[DataMember(Name="path_match")]
		public string PathMatch { get; set; }


		[DataMember(Name="path_unmatch")]
		public string PathUnmatch { get; set; }


		[DataMember(Name="unmatch")]
		public string Unmatch { get; set; }

	}
}
