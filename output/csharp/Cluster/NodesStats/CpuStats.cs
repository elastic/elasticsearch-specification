using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class CpuStats  {
		
		[DataMember(Name="percent")]
		public int Percent { get; set; }


		[DataMember(Name="sys")]
		public string Sys { get; set; }


		[DataMember(Name="sys_in_millis")]
		public long SysInMillis { get; set; }


		[DataMember(Name="total")]
		public string Total { get; set; }


		[DataMember(Name="total_in_millis")]
		public long TotalInMillis { get; set; }


		[DataMember(Name="user")]
		public string User { get; set; }


		[DataMember(Name="user_in_millis")]
		public long UserInMillis { get; set; }

	}
}
