using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PreviewDatafeedResponse<TDocument> : ResponseBase {
		
		[DataMember(Name="data")]
		public List<TDocument> Data { get; set; }

	}
}
