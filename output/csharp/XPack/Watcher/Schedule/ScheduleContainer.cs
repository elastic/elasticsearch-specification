using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ScheduleContainer  {
		
		[DataMember(Name="cron")]
		public CronExpression Cron { get; set; }


		[DataMember(Name="daily")]
		public DailySchedule Daily { get; set; }


		[DataMember(Name="hourly")]
		public HourlySchedule Hourly { get; set; }


		[DataMember(Name="interval")]
		public Interval Interval { get; set; }


		[DataMember(Name="monthly")]
		public List<TimeOfMonth> Monthly { get; set; }


		[DataMember(Name="weekly")]
		public List<TimeOfWeek> Weekly { get; set; }


		[DataMember(Name="yearly")]
		public List<TimeOfYear> Yearly { get; set; }

	}
}
