using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class Fuzziness  {
		
		[DataMember(Name="auto")]
		public bool Auto { get; set; }


		[DataMember(Name="edit_distance")]
		public int EditDistance { get; set; }


		[DataMember(Name="high")]
		public int High { get; set; }


		[DataMember(Name="low")]
		public int Low { get; set; }


		[DataMember(Name="ratio")]
		public double Ratio { get; set; }

	}
}
