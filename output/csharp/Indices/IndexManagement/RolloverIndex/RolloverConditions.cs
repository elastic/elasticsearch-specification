using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RolloverConditions  {
		
		[DataMember(Name="max_age")]
		public Time MaxAge { get; set; }


		[DataMember(Name="max_docs")]
		public long MaxDocs { get; set; }


		[DataMember(Name="max_size")]
		public string MaxSize { get; set; }

	}
}
