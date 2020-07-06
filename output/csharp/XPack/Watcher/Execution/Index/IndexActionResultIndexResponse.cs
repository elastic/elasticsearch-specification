using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IndexActionResultIndexResponse  {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="result")]
		public Result Result { get; set; }


		[DataMember(Name="version")]
		public int Version { get; set; }

	}
}
