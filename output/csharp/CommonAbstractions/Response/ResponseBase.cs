using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonAbstractions {

	public class ResponseBase : IResponse {
		
		[DataMember(Name="debug_information")]
		public string DebugInformation { get; set; }


		[DataMember(Name="server_error")]
		public ServerError ServerError { get; set; }

	}
}
