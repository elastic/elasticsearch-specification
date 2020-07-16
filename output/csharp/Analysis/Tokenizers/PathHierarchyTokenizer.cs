using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PathHierarchyTokenizer : TokenizerBase {
		
		[DataMember(Name="buffer_size")]
		public int BufferSize { get; set; }


		[DataMember(Name="delimiter")]
		public string Delimiter { get; set; }


		[DataMember(Name="replacement")]
		public string Replacement { get; set; }


		[DataMember(Name="reverse")]
		public bool Reverse { get; set; }


		[DataMember(Name="skip")]
		public int Skip { get; set; }

	}
}
