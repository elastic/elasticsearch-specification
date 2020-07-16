using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class NoriAnalyzer : AnalyzerBase {
		
		[DataMember(Name="decompound_mode")]
		public NoriDecompoundMode DecompoundMode { get; set; }


		[DataMember(Name="stoptags")]
		public List<string> Stoptags { get; set; }


		[DataMember(Name="user_dictionary")]
		public string UserDictionary { get; set; }

	}
}
