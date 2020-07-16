using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class Time  {
		
		[DataMember(Name="factor")]
		public double Factor { get; set; }


		[DataMember(Name="interval")]
		public TimeUnit Interval { get; set; }


		[DataMember(Name="milliseconds")]
		public double Milliseconds { get; set; }


		[DataMember(Name="minus_one")]
		public Time MinusOne { get; set; }


		[DataMember(Name="zero")]
		public Time Zero { get; set; }

	}
}
