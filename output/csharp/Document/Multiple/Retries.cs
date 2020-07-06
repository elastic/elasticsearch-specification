using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class Retries  {
		
		[DataMember(Name="bulk")]
		public long Bulk { get; set; }


		[DataMember(Name="search")]
		public long Search { get; set; }

	}
}
