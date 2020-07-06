using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformSyncContainer  {
		
		[DataMember(Name="time")]
		public TransformTimeSync Time { get; set; }

	}
}
