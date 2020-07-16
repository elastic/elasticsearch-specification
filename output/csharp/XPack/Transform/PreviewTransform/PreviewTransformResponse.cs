using Nest.IndexModules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PreviewTransformResponse<TTransform> : IResponse {
		
		[DataMember(Name="generated_dest_index")]
		public IndexState GeneratedDestIndex { get; set; }


		[DataMember(Name="preview")]
		public List<TTransform> Preview { get; set; }

	}
}
