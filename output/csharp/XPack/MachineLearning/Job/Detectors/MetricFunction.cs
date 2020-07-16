
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum MetricFunction {
  
		[DataMember(Name = "Min")] Min,
		[DataMember(Name = "Max")] Max,
		[DataMember(Name = "Median")] Median,
		[DataMember(Name = "HighMedian")] HighMedian,
		[DataMember(Name = "LowMedian")] LowMedian,
		[DataMember(Name = "Mean")] Mean,
		[DataMember(Name = "HighMean")] HighMean,
		[DataMember(Name = "LowMean")] LowMean,
		[DataMember(Name = "Metric")] Metric,
		[DataMember(Name = "Varp")] Varp,
		[DataMember(Name = "HighVarp")] HighVarp,
		[DataMember(Name = "LowVarp")] LowVarp
	}
}
