using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class AggregationContainer  {
		
		[DataMember(Name="adjacency_matrix")]
		public AdjacencyMatrixAggregation AdjacencyMatrix { get; set; }


		[DataMember(Name="aggs")]
		public IDictionary<string, AggregationContainer> Aggs { get; set; }


		[DataMember(Name="auto_date_histogram")]
		public AutoDateHistogramAggregation AutoDateHistogram { get; set; }


		[DataMember(Name="avg")]
		public AverageAggregation Avg { get; set; }


		[DataMember(Name="avg_bucket")]
		public AverageBucketAggregation AvgBucket { get; set; }


		[DataMember(Name="boxplot")]
		public BoxplotAggregation Boxplot { get; set; }


		[DataMember(Name="bucket_script")]
		public BucketScriptAggregation BucketScript { get; set; }


		[DataMember(Name="bucket_selector")]
		public BucketSelectorAggregation BucketSelector { get; set; }


		[DataMember(Name="bucket_sort")]
		public BucketSortAggregation BucketSort { get; set; }


		[DataMember(Name="cardinality")]
		public CardinalityAggregation Cardinality { get; set; }


		[DataMember(Name="children")]
		public ChildrenAggregation Children { get; set; }


		[DataMember(Name="composite")]
		public CompositeAggregation Composite { get; set; }


		[DataMember(Name="cumulative_cardinality")]
		public CumulativeCardinalityAggregation CumulativeCardinality { get; set; }


		[DataMember(Name="cumulative_sum")]
		public CumulativeSumAggregation CumulativeSum { get; set; }


		[DataMember(Name="date_histogram")]
		public DateHistogramAggregation DateHistogram { get; set; }


		[DataMember(Name="date_range")]
		public DateRangeAggregation DateRange { get; set; }


		[DataMember(Name="derivative")]
		public DerivativeAggregation Derivative { get; set; }


		[DataMember(Name="extended_stats")]
		public ExtendedStatsAggregation ExtendedStats { get; set; }


		[DataMember(Name="extended_stats_bucket")]
		public ExtendedStatsBucketAggregation ExtendedStatsBucket { get; set; }


		[DataMember(Name="filter")]
		public FilterAggregation Filter { get; set; }


		[DataMember(Name="filters")]
		public FiltersAggregation Filters { get; set; }


		[DataMember(Name="geo_bounds")]
		public GeoBoundsAggregation GeoBounds { get; set; }


		[DataMember(Name="geo_centroid")]
		public GeoCentroidAggregation GeoCentroid { get; set; }


		[DataMember(Name="geo_distance")]
		public GeoDistanceAggregation GeoDistance { get; set; }


		[DataMember(Name="geohash_grid")]
		public GeoHashGridAggregation GeohashGrid { get; set; }


		[DataMember(Name="geotile_grid")]
		public GeoTileGridAggregation GeotileGrid { get; set; }


		[DataMember(Name="global")]
		public GlobalAggregation Global { get; set; }


		[DataMember(Name="histogram")]
		public HistogramAggregation Histogram { get; set; }


		[DataMember(Name="ip_range")]
		public IpRangeAggregation IpRange { get; set; }


		[DataMember(Name="matrix_stats")]
		public MatrixStatsAggregation MatrixStats { get; set; }


		[DataMember(Name="max")]
		public MaxAggregation Max { get; set; }


		[DataMember(Name="max_bucket")]
		public MaxBucketAggregation MaxBucket { get; set; }


		[DataMember(Name="median_absolute_deviation")]
		public MedianAbsoluteDeviationAggregation MedianAbsoluteDeviation { get; set; }


		[DataMember(Name="meta")]
		public IDictionary<string, object> Meta { get; set; }


		[DataMember(Name="min")]
		public MinAggregation Min { get; set; }


		[DataMember(Name="min_bucket")]
		public MinBucketAggregation MinBucket { get; set; }


		[DataMember(Name="missing")]
		public MissingAggregation Missing { get; set; }


		[DataMember(Name="moving_avg")]
		public MovingAverageAggregation MovingAvg { get; set; }


		[DataMember(Name="moving_fn")]
		public MovingFunctionAggregation MovingFn { get; set; }


		[DataMember(Name="nested")]
		public NestedAggregation Nested { get; set; }


		[DataMember(Name="parent")]
		public ParentAggregation Parent { get; set; }


		[DataMember(Name="percentile_ranks")]
		public PercentileRanksAggregation PercentileRanks { get; set; }


		[DataMember(Name="percentiles")]
		public PercentilesAggregation Percentiles { get; set; }


		[DataMember(Name="percentiles_bucket")]
		public PercentilesBucketAggregation PercentilesBucket { get; set; }


		[DataMember(Name="range")]
		public RangeAggregation Range { get; set; }


		[DataMember(Name="rare_terms")]
		public RareTermsAggregation RareTerms { get; set; }


		[DataMember(Name="reverse_nested")]
		public ReverseNestedAggregation ReverseNested { get; set; }


		[DataMember(Name="sampler")]
		public SamplerAggregation Sampler { get; set; }


		[DataMember(Name="scripted_metric")]
		public ScriptedMetricAggregation ScriptedMetric { get; set; }


		[DataMember(Name="serial_diff")]
		public SerialDifferencingAggregation SerialDiff { get; set; }


		[DataMember(Name="significant_terms")]
		public SignificantTermsAggregation SignificantTerms { get; set; }


		[DataMember(Name="significant_text")]
		public SignificantTextAggregation SignificantText { get; set; }


		[DataMember(Name="stats")]
		public StatsAggregation Stats { get; set; }


		[DataMember(Name="stats_bucket")]
		public StatsBucketAggregation StatsBucket { get; set; }


		[DataMember(Name="string_stats")]
		public StringStatsAggregation StringStats { get; set; }


		[DataMember(Name="sum")]
		public SumAggregation Sum { get; set; }


		[DataMember(Name="sum_bucket")]
		public SumBucketAggregation SumBucket { get; set; }


		[DataMember(Name="terms")]
		public TermsAggregation Terms { get; set; }


		[DataMember(Name="top_hits")]
		public TopHitsAggregation TopHits { get; set; }


		[DataMember(Name="top_metrics")]
		public TopMetricsAggregation TopMetrics { get; set; }


		[DataMember(Name="value_count")]
		public ValueCountAggregation ValueCount { get; set; }


		[DataMember(Name="weighted_avg")]
		public WeightedAverageAggregation WeightedAvg { get; set; }

	}
}
