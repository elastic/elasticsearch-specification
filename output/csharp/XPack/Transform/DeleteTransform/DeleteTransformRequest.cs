using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeleteTransformRequest : RequestBase {
		
		[DataMember(Name="force")]
		public bool Force { get; set; }

	}
}
