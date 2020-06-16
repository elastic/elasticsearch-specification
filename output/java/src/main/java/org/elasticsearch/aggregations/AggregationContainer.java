
package org.elasticsearch.aggregations;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.bucket.adjacency_matrix.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.aggregations.metric.average.*;
import org.elasticsearch.aggregations.pipeline.average_bucket.*;
import org.elasticsearch.aggregations.metric.boxplot.*;
import org.elasticsearch.aggregations.pipeline.bucket_script.*;
import org.elasticsearch.aggregations.pipeline.bucket_selector.*;
import org.elasticsearch.aggregations.pipeline.bucket_sort.*;
import org.elasticsearch.aggregations.metric.cardinality.*;
import org.elasticsearch.aggregations.bucket.children.*;
import org.elasticsearch.aggregations.bucket.composite.*;
import org.elasticsearch.aggregations.pipeline.cumulative_sum.*;
import org.elasticsearch.aggregations.pipeline.cumulative_cardinality.*;
import org.elasticsearch.aggregations.bucket.date_histogram.*;
import org.elasticsearch.aggregations.bucket.auto_date_histogram.*;
import org.elasticsearch.aggregations.bucket.date_range.*;
import org.elasticsearch.aggregations.pipeline.derivative.*;
import org.elasticsearch.aggregations.metric.extended_stats.*;
import org.elasticsearch.aggregations.pipeline.extended_stats_bucket.*;
import org.elasticsearch.aggregations.bucket.filter.*;
import org.elasticsearch.aggregations.bucket.filters.*;
import org.elasticsearch.aggregations.metric.geo_bounds.*;
import org.elasticsearch.aggregations.metric.geo_centroid.*;
import org.elasticsearch.aggregations.bucket.geo_distance.*;
import org.elasticsearch.aggregations.bucket.geo_hash_grid.*;
import org.elasticsearch.aggregations.bucket.geo_tile_grid.*;
import org.elasticsearch.aggregations.bucket.global.*;
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.aggregations.bucket.ip_range.*;
import org.elasticsearch.aggregations.matrix.matrix_stats.*;
import org.elasticsearch.aggregations.metric.max.*;
import org.elasticsearch.aggregations.pipeline.max_bucket.*;
import org.elasticsearch.aggregations.metric.min.*;
import org.elasticsearch.aggregations.pipeline.min_bucket.*;
import org.elasticsearch.aggregations.bucket.missing.*;
import org.elasticsearch.aggregations.pipeline.moving_average.*;
import org.elasticsearch.aggregations.pipeline.moving_function.*;
import org.elasticsearch.aggregations.bucket.nested.*;
import org.elasticsearch.aggregations.bucket.parent.*;
import org.elasticsearch.aggregations.metric.percentile_ranks.*;
import org.elasticsearch.aggregations.metric.percentiles.*;
import org.elasticsearch.aggregations.pipeline.percentiles_bucket.*;
import org.elasticsearch.aggregations.bucket.range.*;
import org.elasticsearch.aggregations.bucket.rare_terms.*;
import org.elasticsearch.aggregations.bucket.reverse_nested.*;
import org.elasticsearch.aggregations.bucket.sampler.*;
import org.elasticsearch.aggregations.metric.scripted_metric.*;
import org.elasticsearch.aggregations.pipeline.serial_differencing.*;
import org.elasticsearch.aggregations.bucket.significant_terms.*;
import org.elasticsearch.aggregations.bucket.significant_text.*;
import org.elasticsearch.aggregations.metric.stats.*;
import org.elasticsearch.aggregations.pipeline.stats_bucket.*;
import org.elasticsearch.aggregations.metric.sum.*;
import org.elasticsearch.aggregations.pipeline.sum_bucket.*;
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.aggregations.metric.top_hits.*;
import org.elasticsearch.aggregations.metric.value_count.*;
import org.elasticsearch.aggregations.metric.weighted_average.*;
import org.elasticsearch.aggregations.metric.median_absolute_deviation.*;
import org.elasticsearch.aggregations.metric.string_stats.*;
import org.elasticsearch.aggregations.metric.top_metrics.*;

public class AggregationContainer  implements XContentable<AggregationContainer> {
  
  static final ParseField ADJACENCY_MATRIX = new ParseField("adjacency_matrix");
  private AdjacencyMatrixAggregation _adjacencyMatrix;
  public AdjacencyMatrixAggregation getAdjacencyMatrix() { return this._adjacencyMatrix; }
  public AggregationContainer setAdjacencyMatrix(AdjacencyMatrixAggregation val) { this._adjacencyMatrix = val; return this; }


  static final ParseField AGGS = new ParseField("aggs");
  private NamedContainer<String, AggregationContainer> _aggs;
  public NamedContainer<String, AggregationContainer> getAggs() { return this._aggs; }
  public AggregationContainer setAggs(NamedContainer<String, AggregationContainer> val) { this._aggs = val; return this; }


  static final ParseField AVG = new ParseField("avg");
  private AverageAggregation _avg;
  public AverageAggregation getAvg() { return this._avg; }
  public AggregationContainer setAvg(AverageAggregation val) { this._avg = val; return this; }


  static final ParseField AVG_BUCKET = new ParseField("avg_bucket");
  private AverageBucketAggregation _avgBucket;
  public AverageBucketAggregation getAvgBucket() { return this._avgBucket; }
  public AggregationContainer setAvgBucket(AverageBucketAggregation val) { this._avgBucket = val; return this; }


  static final ParseField BOXPLOT = new ParseField("boxplot");
  private BoxplotAggregation _boxplot;
  public BoxplotAggregation getBoxplot() { return this._boxplot; }
  public AggregationContainer setBoxplot(BoxplotAggregation val) { this._boxplot = val; return this; }


  static final ParseField BUCKET_SCRIPT = new ParseField("bucket_script");
  private BucketScriptAggregation _bucketScript;
  public BucketScriptAggregation getBucketScript() { return this._bucketScript; }
  public AggregationContainer setBucketScript(BucketScriptAggregation val) { this._bucketScript = val; return this; }


  static final ParseField BUCKET_SELECTOR = new ParseField("bucket_selector");
  private BucketSelectorAggregation _bucketSelector;
  public BucketSelectorAggregation getBucketSelector() { return this._bucketSelector; }
  public AggregationContainer setBucketSelector(BucketSelectorAggregation val) { this._bucketSelector = val; return this; }


  static final ParseField BUCKET_SORT = new ParseField("bucket_sort");
  private BucketSortAggregation _bucketSort;
  public BucketSortAggregation getBucketSort() { return this._bucketSort; }
  public AggregationContainer setBucketSort(BucketSortAggregation val) { this._bucketSort = val; return this; }


  static final ParseField CARDINALITY = new ParseField("cardinality");
  private CardinalityAggregation _cardinality;
  public CardinalityAggregation getCardinality() { return this._cardinality; }
  public AggregationContainer setCardinality(CardinalityAggregation val) { this._cardinality = val; return this; }


  static final ParseField CHILDREN = new ParseField("children");
  private ChildrenAggregation _children;
  public ChildrenAggregation getChildren() { return this._children; }
  public AggregationContainer setChildren(ChildrenAggregation val) { this._children = val; return this; }


  static final ParseField COMPOSITE = new ParseField("composite");
  private CompositeAggregation _composite;
  public CompositeAggregation getComposite() { return this._composite; }
  public AggregationContainer setComposite(CompositeAggregation val) { this._composite = val; return this; }


  static final ParseField CUMULATIVE_SUM = new ParseField("cumulative_sum");
  private CumulativeSumAggregation _cumulativeSum;
  public CumulativeSumAggregation getCumulativeSum() { return this._cumulativeSum; }
  public AggregationContainer setCumulativeSum(CumulativeSumAggregation val) { this._cumulativeSum = val; return this; }


  static final ParseField CUMULATIVE_CARDINALITY = new ParseField("cumulative_cardinality");
  private CumulativeCardinalityAggregation _cumulativeCardinality;
  public CumulativeCardinalityAggregation getCumulativeCardinality() { return this._cumulativeCardinality; }
  public AggregationContainer setCumulativeCardinality(CumulativeCardinalityAggregation val) { this._cumulativeCardinality = val; return this; }


  static final ParseField DATE_HISTOGRAM = new ParseField("date_histogram");
  private DateHistogramAggregation _dateHistogram;
  public DateHistogramAggregation getDateHistogram() { return this._dateHistogram; }
  public AggregationContainer setDateHistogram(DateHistogramAggregation val) { this._dateHistogram = val; return this; }


  static final ParseField AUTO_DATE_HISTOGRAM = new ParseField("auto_date_histogram");
  private AutoDateHistogramAggregation _autoDateHistogram;
  public AutoDateHistogramAggregation getAutoDateHistogram() { return this._autoDateHistogram; }
  public AggregationContainer setAutoDateHistogram(AutoDateHistogramAggregation val) { this._autoDateHistogram = val; return this; }


  static final ParseField DATE_RANGE = new ParseField("date_range");
  private DateRangeAggregation _dateRange;
  public DateRangeAggregation getDateRange() { return this._dateRange; }
  public AggregationContainer setDateRange(DateRangeAggregation val) { this._dateRange = val; return this; }


  static final ParseField DERIVATIVE = new ParseField("derivative");
  private DerivativeAggregation _derivative;
  public DerivativeAggregation getDerivative() { return this._derivative; }
  public AggregationContainer setDerivative(DerivativeAggregation val) { this._derivative = val; return this; }


  static final ParseField EXTENDED_STATS = new ParseField("extended_stats");
  private ExtendedStatsAggregation _extendedStats;
  public ExtendedStatsAggregation getExtendedStats() { return this._extendedStats; }
  public AggregationContainer setExtendedStats(ExtendedStatsAggregation val) { this._extendedStats = val; return this; }


  static final ParseField EXTENDED_STATS_BUCKET = new ParseField("extended_stats_bucket");
  private ExtendedStatsBucketAggregation _extendedStatsBucket;
  public ExtendedStatsBucketAggregation getExtendedStatsBucket() { return this._extendedStatsBucket; }
  public AggregationContainer setExtendedStatsBucket(ExtendedStatsBucketAggregation val) { this._extendedStatsBucket = val; return this; }


  static final ParseField FILTER = new ParseField("filter");
  private FilterAggregation _filter;
  public FilterAggregation getFilter() { return this._filter; }
  public AggregationContainer setFilter(FilterAggregation val) { this._filter = val; return this; }


  static final ParseField FILTERS = new ParseField("filters");
  private FiltersAggregation _filters;
  public FiltersAggregation getFilters() { return this._filters; }
  public AggregationContainer setFilters(FiltersAggregation val) { this._filters = val; return this; }


  static final ParseField GEO_BOUNDS = new ParseField("geo_bounds");
  private GeoBoundsAggregation _geoBounds;
  public GeoBoundsAggregation getGeoBounds() { return this._geoBounds; }
  public AggregationContainer setGeoBounds(GeoBoundsAggregation val) { this._geoBounds = val; return this; }


  static final ParseField GEO_CENTROID = new ParseField("geo_centroid");
  private GeoCentroidAggregation _geoCentroid;
  public GeoCentroidAggregation getGeoCentroid() { return this._geoCentroid; }
  public AggregationContainer setGeoCentroid(GeoCentroidAggregation val) { this._geoCentroid = val; return this; }


  static final ParseField GEO_DISTANCE = new ParseField("geo_distance");
  private GeoDistanceAggregation _geoDistance;
  public GeoDistanceAggregation getGeoDistance() { return this._geoDistance; }
  public AggregationContainer setGeoDistance(GeoDistanceAggregation val) { this._geoDistance = val; return this; }


  static final ParseField GEOHASH_GRID = new ParseField("geohash_grid");
  private GeoHashGridAggregation _geohashGrid;
  public GeoHashGridAggregation getGeohashGrid() { return this._geohashGrid; }
  public AggregationContainer setGeohashGrid(GeoHashGridAggregation val) { this._geohashGrid = val; return this; }


  static final ParseField GEOTILE_GRID = new ParseField("geotile_grid");
  private GeoTileGridAggregation _geotileGrid;
  public GeoTileGridAggregation getGeotileGrid() { return this._geotileGrid; }
  public AggregationContainer setGeotileGrid(GeoTileGridAggregation val) { this._geotileGrid = val; return this; }


  static final ParseField GLOBAL = new ParseField("global");
  private GlobalAggregation _global;
  public GlobalAggregation getGlobal() { return this._global; }
  public AggregationContainer setGlobal(GlobalAggregation val) { this._global = val; return this; }


  static final ParseField HISTOGRAM = new ParseField("histogram");
  private HistogramAggregation _histogram;
  public HistogramAggregation getHistogram() { return this._histogram; }
  public AggregationContainer setHistogram(HistogramAggregation val) { this._histogram = val; return this; }


  static final ParseField IP_RANGE = new ParseField("ip_range");
  private IpRangeAggregation _ipRange;
  public IpRangeAggregation getIpRange() { return this._ipRange; }
  public AggregationContainer setIpRange(IpRangeAggregation val) { this._ipRange = val; return this; }


  static final ParseField MATRIX_STATS = new ParseField("matrix_stats");
  private MatrixStatsAggregation _matrixStats;
  public MatrixStatsAggregation getMatrixStats() { return this._matrixStats; }
  public AggregationContainer setMatrixStats(MatrixStatsAggregation val) { this._matrixStats = val; return this; }


  static final ParseField MAX = new ParseField("max");
  private MaxAggregation _max;
  public MaxAggregation getMax() { return this._max; }
  public AggregationContainer setMax(MaxAggregation val) { this._max = val; return this; }


  static final ParseField MAX_BUCKET = new ParseField("max_bucket");
  private MaxBucketAggregation _maxBucket;
  public MaxBucketAggregation getMaxBucket() { return this._maxBucket; }
  public AggregationContainer setMaxBucket(MaxBucketAggregation val) { this._maxBucket = val; return this; }


  static final ParseField META = new ParseField("meta");
  private NamedContainer<String, Object> _meta;
  public NamedContainer<String, Object> getMeta() { return this._meta; }
  public AggregationContainer setMeta(NamedContainer<String, Object> val) { this._meta = val; return this; }


  static final ParseField MIN = new ParseField("min");
  private MinAggregation _min;
  public MinAggregation getMin() { return this._min; }
  public AggregationContainer setMin(MinAggregation val) { this._min = val; return this; }


  static final ParseField MIN_BUCKET = new ParseField("min_bucket");
  private MinBucketAggregation _minBucket;
  public MinBucketAggregation getMinBucket() { return this._minBucket; }
  public AggregationContainer setMinBucket(MinBucketAggregation val) { this._minBucket = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private MissingAggregation _missing;
  public MissingAggregation getMissing() { return this._missing; }
  public AggregationContainer setMissing(MissingAggregation val) { this._missing = val; return this; }


  static final ParseField MOVING_AVG = new ParseField("moving_avg");
  private MovingAverageAggregation _movingAvg;
  public MovingAverageAggregation getMovingAvg() { return this._movingAvg; }
  public AggregationContainer setMovingAvg(MovingAverageAggregation val) { this._movingAvg = val; return this; }


  static final ParseField MOVING_FN = new ParseField("moving_fn");
  private MovingFunctionAggregation _movingFn;
  public MovingFunctionAggregation getMovingFn() { return this._movingFn; }
  public AggregationContainer setMovingFn(MovingFunctionAggregation val) { this._movingFn = val; return this; }


  static final ParseField NESTED = new ParseField("nested");
  private NestedAggregation _nested;
  public NestedAggregation getNested() { return this._nested; }
  public AggregationContainer setNested(NestedAggregation val) { this._nested = val; return this; }


  static final ParseField PARENT = new ParseField("parent");
  private ParentAggregation _parent;
  public ParentAggregation getParent() { return this._parent; }
  public AggregationContainer setParent(ParentAggregation val) { this._parent = val; return this; }


  static final ParseField PERCENTILE_RANKS = new ParseField("percentile_ranks");
  private PercentileRanksAggregation _percentileRanks;
  public PercentileRanksAggregation getPercentileRanks() { return this._percentileRanks; }
  public AggregationContainer setPercentileRanks(PercentileRanksAggregation val) { this._percentileRanks = val; return this; }


  static final ParseField PERCENTILES = new ParseField("percentiles");
  private PercentilesAggregation _percentiles;
  public PercentilesAggregation getPercentiles() { return this._percentiles; }
  public AggregationContainer setPercentiles(PercentilesAggregation val) { this._percentiles = val; return this; }


  static final ParseField PERCENTILES_BUCKET = new ParseField("percentiles_bucket");
  private PercentilesBucketAggregation _percentilesBucket;
  public PercentilesBucketAggregation getPercentilesBucket() { return this._percentilesBucket; }
  public AggregationContainer setPercentilesBucket(PercentilesBucketAggregation val) { this._percentilesBucket = val; return this; }


  static final ParseField RANGE = new ParseField("range");
  private RangeAggregation _range;
  public RangeAggregation getRange() { return this._range; }
  public AggregationContainer setRange(RangeAggregation val) { this._range = val; return this; }


  static final ParseField RARE_TERMS = new ParseField("rare_terms");
  private RareTermsAggregation _rareTerms;
  public RareTermsAggregation getRareTerms() { return this._rareTerms; }
  public AggregationContainer setRareTerms(RareTermsAggregation val) { this._rareTerms = val; return this; }


  static final ParseField REVERSE_NESTED = new ParseField("reverse_nested");
  private ReverseNestedAggregation _reverseNested;
  public ReverseNestedAggregation getReverseNested() { return this._reverseNested; }
  public AggregationContainer setReverseNested(ReverseNestedAggregation val) { this._reverseNested = val; return this; }


  static final ParseField SAMPLER = new ParseField("sampler");
  private SamplerAggregation _sampler;
  public SamplerAggregation getSampler() { return this._sampler; }
  public AggregationContainer setSampler(SamplerAggregation val) { this._sampler = val; return this; }


  static final ParseField SCRIPTED_METRIC = new ParseField("scripted_metric");
  private ScriptedMetricAggregation _scriptedMetric;
  public ScriptedMetricAggregation getScriptedMetric() { return this._scriptedMetric; }
  public AggregationContainer setScriptedMetric(ScriptedMetricAggregation val) { this._scriptedMetric = val; return this; }


  static final ParseField SERIAL_DIFF = new ParseField("serial_diff");
  private SerialDifferencingAggregation _serialDiff;
  public SerialDifferencingAggregation getSerialDiff() { return this._serialDiff; }
  public AggregationContainer setSerialDiff(SerialDifferencingAggregation val) { this._serialDiff = val; return this; }


  static final ParseField SIGNIFICANT_TERMS = new ParseField("significant_terms");
  private SignificantTermsAggregation _significantTerms;
  public SignificantTermsAggregation getSignificantTerms() { return this._significantTerms; }
  public AggregationContainer setSignificantTerms(SignificantTermsAggregation val) { this._significantTerms = val; return this; }


  static final ParseField SIGNIFICANT_TEXT = new ParseField("significant_text");
  private SignificantTextAggregation _significantText;
  public SignificantTextAggregation getSignificantText() { return this._significantText; }
  public AggregationContainer setSignificantText(SignificantTextAggregation val) { this._significantText = val; return this; }


  static final ParseField STATS = new ParseField("stats");
  private StatsAggregation _stats;
  public StatsAggregation getStats() { return this._stats; }
  public AggregationContainer setStats(StatsAggregation val) { this._stats = val; return this; }


  static final ParseField STATS_BUCKET = new ParseField("stats_bucket");
  private StatsBucketAggregation _statsBucket;
  public StatsBucketAggregation getStatsBucket() { return this._statsBucket; }
  public AggregationContainer setStatsBucket(StatsBucketAggregation val) { this._statsBucket = val; return this; }


  static final ParseField SUM = new ParseField("sum");
  private SumAggregation _sum;
  public SumAggregation getSum() { return this._sum; }
  public AggregationContainer setSum(SumAggregation val) { this._sum = val; return this; }


  static final ParseField SUM_BUCKET = new ParseField("sum_bucket");
  private SumBucketAggregation _sumBucket;
  public SumBucketAggregation getSumBucket() { return this._sumBucket; }
  public AggregationContainer setSumBucket(SumBucketAggregation val) { this._sumBucket = val; return this; }


  static final ParseField TERMS = new ParseField("terms");
  private TermsAggregation _terms;
  public TermsAggregation getTerms() { return this._terms; }
  public AggregationContainer setTerms(TermsAggregation val) { this._terms = val; return this; }


  static final ParseField TOP_HITS = new ParseField("top_hits");
  private TopHitsAggregation _topHits;
  public TopHitsAggregation getTopHits() { return this._topHits; }
  public AggregationContainer setTopHits(TopHitsAggregation val) { this._topHits = val; return this; }


  static final ParseField VALUE_COUNT = new ParseField("value_count");
  private ValueCountAggregation _valueCount;
  public ValueCountAggregation getValueCount() { return this._valueCount; }
  public AggregationContainer setValueCount(ValueCountAggregation val) { this._valueCount = val; return this; }


  static final ParseField WEIGHTED_AVG = new ParseField("weighted_avg");
  private WeightedAverageAggregation _weightedAvg;
  public WeightedAverageAggregation getWeightedAvg() { return this._weightedAvg; }
  public AggregationContainer setWeightedAvg(WeightedAverageAggregation val) { this._weightedAvg = val; return this; }


  static final ParseField MEDIAN_ABSOLUTE_DEVIATION = new ParseField("median_absolute_deviation");
  private MedianAbsoluteDeviationAggregation _medianAbsoluteDeviation;
  public MedianAbsoluteDeviationAggregation getMedianAbsoluteDeviation() { return this._medianAbsoluteDeviation; }
  public AggregationContainer setMedianAbsoluteDeviation(MedianAbsoluteDeviationAggregation val) { this._medianAbsoluteDeviation = val; return this; }


  static final ParseField STRING_STATS = new ParseField("string_stats");
  private StringStatsAggregation _stringStats;
  public StringStatsAggregation getStringStats() { return this._stringStats; }
  public AggregationContainer setStringStats(StringStatsAggregation val) { this._stringStats = val; return this; }


  static final ParseField TOP_METRICS = new ParseField("top_metrics");
  private TopMetricsAggregation _topMetrics;
  public TopMetricsAggregation getTopMetrics() { return this._topMetrics; }
  public AggregationContainer setTopMetrics(TopMetricsAggregation val) { this._topMetrics = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_adjacencyMatrix != null) {
      builder.field(ADJACENCY_MATRIX.getPreferredName());
      _adjacencyMatrix.toXContent(builder, params);
    }
    if (_aggs != null) {
      builder.field(AGGS.getPreferredName());
      _aggs.toXContent(builder, params);
    }
    if (_avg != null) {
      builder.field(AVG.getPreferredName());
      _avg.toXContent(builder, params);
    }
    if (_avgBucket != null) {
      builder.field(AVG_BUCKET.getPreferredName());
      _avgBucket.toXContent(builder, params);
    }
    if (_boxplot != null) {
      builder.field(BOXPLOT.getPreferredName());
      _boxplot.toXContent(builder, params);
    }
    if (_bucketScript != null) {
      builder.field(BUCKET_SCRIPT.getPreferredName());
      _bucketScript.toXContent(builder, params);
    }
    if (_bucketSelector != null) {
      builder.field(BUCKET_SELECTOR.getPreferredName());
      _bucketSelector.toXContent(builder, params);
    }
    if (_bucketSort != null) {
      builder.field(BUCKET_SORT.getPreferredName());
      _bucketSort.toXContent(builder, params);
    }
    if (_cardinality != null) {
      builder.field(CARDINALITY.getPreferredName());
      _cardinality.toXContent(builder, params);
    }
    if (_children != null) {
      builder.field(CHILDREN.getPreferredName());
      _children.toXContent(builder, params);
    }
    if (_composite != null) {
      builder.field(COMPOSITE.getPreferredName());
      _composite.toXContent(builder, params);
    }
    if (_cumulativeSum != null) {
      builder.field(CUMULATIVE_SUM.getPreferredName());
      _cumulativeSum.toXContent(builder, params);
    }
    if (_cumulativeCardinality != null) {
      builder.field(CUMULATIVE_CARDINALITY.getPreferredName());
      _cumulativeCardinality.toXContent(builder, params);
    }
    if (_dateHistogram != null) {
      builder.field(DATE_HISTOGRAM.getPreferredName());
      _dateHistogram.toXContent(builder, params);
    }
    if (_autoDateHistogram != null) {
      builder.field(AUTO_DATE_HISTOGRAM.getPreferredName());
      _autoDateHistogram.toXContent(builder, params);
    }
    if (_dateRange != null) {
      builder.field(DATE_RANGE.getPreferredName());
      _dateRange.toXContent(builder, params);
    }
    if (_derivative != null) {
      builder.field(DERIVATIVE.getPreferredName());
      _derivative.toXContent(builder, params);
    }
    if (_extendedStats != null) {
      builder.field(EXTENDED_STATS.getPreferredName());
      _extendedStats.toXContent(builder, params);
    }
    if (_extendedStatsBucket != null) {
      builder.field(EXTENDED_STATS_BUCKET.getPreferredName());
      _extendedStatsBucket.toXContent(builder, params);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_filters != null) {
      builder.field(FILTERS.getPreferredName());
      _filters.toXContent(builder, params);
    }
    if (_geoBounds != null) {
      builder.field(GEO_BOUNDS.getPreferredName());
      _geoBounds.toXContent(builder, params);
    }
    if (_geoCentroid != null) {
      builder.field(GEO_CENTROID.getPreferredName());
      _geoCentroid.toXContent(builder, params);
    }
    if (_geoDistance != null) {
      builder.field(GEO_DISTANCE.getPreferredName());
      _geoDistance.toXContent(builder, params);
    }
    if (_geohashGrid != null) {
      builder.field(GEOHASH_GRID.getPreferredName());
      _geohashGrid.toXContent(builder, params);
    }
    if (_geotileGrid != null) {
      builder.field(GEOTILE_GRID.getPreferredName());
      _geotileGrid.toXContent(builder, params);
    }
    if (_global != null) {
      builder.field(GLOBAL.getPreferredName());
      _global.toXContent(builder, params);
    }
    if (_histogram != null) {
      builder.field(HISTOGRAM.getPreferredName());
      _histogram.toXContent(builder, params);
    }
    if (_ipRange != null) {
      builder.field(IP_RANGE.getPreferredName());
      _ipRange.toXContent(builder, params);
    }
    if (_matrixStats != null) {
      builder.field(MATRIX_STATS.getPreferredName());
      _matrixStats.toXContent(builder, params);
    }
    if (_max != null) {
      builder.field(MAX.getPreferredName());
      _max.toXContent(builder, params);
    }
    if (_maxBucket != null) {
      builder.field(MAX_BUCKET.getPreferredName());
      _maxBucket.toXContent(builder, params);
    }
    if (_meta != null) {
      builder.field(META.getPreferredName());
      _meta.toXContent(builder, params);
    }
    if (_min != null) {
      builder.field(MIN.getPreferredName());
      _min.toXContent(builder, params);
    }
    if (_minBucket != null) {
      builder.field(MIN_BUCKET.getPreferredName());
      _minBucket.toXContent(builder, params);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    if (_movingAvg != null) {
      builder.field(MOVING_AVG.getPreferredName());
      _movingAvg.toXContent(builder, params);
    }
    if (_movingFn != null) {
      builder.field(MOVING_FN.getPreferredName());
      _movingFn.toXContent(builder, params);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_parent != null) {
      builder.field(PARENT.getPreferredName());
      _parent.toXContent(builder, params);
    }
    if (_percentileRanks != null) {
      builder.field(PERCENTILE_RANKS.getPreferredName());
      _percentileRanks.toXContent(builder, params);
    }
    if (_percentiles != null) {
      builder.field(PERCENTILES.getPreferredName());
      _percentiles.toXContent(builder, params);
    }
    if (_percentilesBucket != null) {
      builder.field(PERCENTILES_BUCKET.getPreferredName());
      _percentilesBucket.toXContent(builder, params);
    }
    if (_range != null) {
      builder.field(RANGE.getPreferredName());
      _range.toXContent(builder, params);
    }
    if (_rareTerms != null) {
      builder.field(RARE_TERMS.getPreferredName());
      _rareTerms.toXContent(builder, params);
    }
    if (_reverseNested != null) {
      builder.field(REVERSE_NESTED.getPreferredName());
      _reverseNested.toXContent(builder, params);
    }
    if (_sampler != null) {
      builder.field(SAMPLER.getPreferredName());
      _sampler.toXContent(builder, params);
    }
    if (_scriptedMetric != null) {
      builder.field(SCRIPTED_METRIC.getPreferredName());
      _scriptedMetric.toXContent(builder, params);
    }
    if (_serialDiff != null) {
      builder.field(SERIAL_DIFF.getPreferredName());
      _serialDiff.toXContent(builder, params);
    }
    if (_significantTerms != null) {
      builder.field(SIGNIFICANT_TERMS.getPreferredName());
      _significantTerms.toXContent(builder, params);
    }
    if (_significantText != null) {
      builder.field(SIGNIFICANT_TEXT.getPreferredName());
      _significantText.toXContent(builder, params);
    }
    if (_stats != null) {
      builder.field(STATS.getPreferredName());
      _stats.toXContent(builder, params);
    }
    if (_statsBucket != null) {
      builder.field(STATS_BUCKET.getPreferredName());
      _statsBucket.toXContent(builder, params);
    }
    if (_sum != null) {
      builder.field(SUM.getPreferredName());
      _sum.toXContent(builder, params);
    }
    if (_sumBucket != null) {
      builder.field(SUM_BUCKET.getPreferredName());
      _sumBucket.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.field(TERMS.getPreferredName());
      _terms.toXContent(builder, params);
    }
    if (_topHits != null) {
      builder.field(TOP_HITS.getPreferredName());
      _topHits.toXContent(builder, params);
    }
    if (_valueCount != null) {
      builder.field(VALUE_COUNT.getPreferredName());
      _valueCount.toXContent(builder, params);
    }
    if (_weightedAvg != null) {
      builder.field(WEIGHTED_AVG.getPreferredName());
      _weightedAvg.toXContent(builder, params);
    }
    if (_medianAbsoluteDeviation != null) {
      builder.field(MEDIAN_ABSOLUTE_DEVIATION.getPreferredName());
      _medianAbsoluteDeviation.toXContent(builder, params);
    }
    if (_stringStats != null) {
      builder.field(STRING_STATS.getPreferredName());
      _stringStats.toXContent(builder, params);
    }
    if (_topMetrics != null) {
      builder.field(TOP_METRICS.getPreferredName());
      _topMetrics.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AggregationContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AggregationContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AggregationContainer, Void> PARSER =
    new ObjectParser<>(AggregationContainer.class.getName(), false, AggregationContainer::new);

  static {
    PARSER.declareObject(AggregationContainer::setAdjacencyMatrix, (p, t) -> AdjacencyMatrixAggregation.PARSER.apply(p, t), ADJACENCY_MATRIX);
    PARSER.declareObject(AggregationContainer::setAggs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGS);
    PARSER.declareObject(AggregationContainer::setAvg, (p, t) -> AverageAggregation.PARSER.apply(p, t), AVG);
    PARSER.declareObject(AggregationContainer::setAvgBucket, (p, t) -> AverageBucketAggregation.PARSER.apply(p, t), AVG_BUCKET);
    PARSER.declareObject(AggregationContainer::setBoxplot, (p, t) -> BoxplotAggregation.PARSER.apply(p, t), BOXPLOT);
    PARSER.declareObject(AggregationContainer::setBucketScript, (p, t) -> BucketScriptAggregation.PARSER.apply(p, t), BUCKET_SCRIPT);
    PARSER.declareObject(AggregationContainer::setBucketSelector, (p, t) -> BucketSelectorAggregation.PARSER.apply(p, t), BUCKET_SELECTOR);
    PARSER.declareObject(AggregationContainer::setBucketSort, (p, t) -> BucketSortAggregation.PARSER.apply(p, t), BUCKET_SORT);
    PARSER.declareObject(AggregationContainer::setCardinality, (p, t) -> CardinalityAggregation.PARSER.apply(p, t), CARDINALITY);
    PARSER.declareObject(AggregationContainer::setChildren, (p, t) -> ChildrenAggregation.PARSER.apply(p, t), CHILDREN);
    PARSER.declareObject(AggregationContainer::setComposite, (p, t) -> CompositeAggregation.PARSER.apply(p, t), COMPOSITE);
    PARSER.declareObject(AggregationContainer::setCumulativeSum, (p, t) -> CumulativeSumAggregation.PARSER.apply(p, t), CUMULATIVE_SUM);
    PARSER.declareObject(AggregationContainer::setCumulativeCardinality, (p, t) -> CumulativeCardinalityAggregation.PARSER.apply(p, t), CUMULATIVE_CARDINALITY);
    PARSER.declareObject(AggregationContainer::setDateHistogram, (p, t) -> DateHistogramAggregation.PARSER.apply(p, t), DATE_HISTOGRAM);
    PARSER.declareObject(AggregationContainer::setAutoDateHistogram, (p, t) -> AutoDateHistogramAggregation.PARSER.apply(p, t), AUTO_DATE_HISTOGRAM);
    PARSER.declareObject(AggregationContainer::setDateRange, (p, t) -> DateRangeAggregation.PARSER.apply(p, t), DATE_RANGE);
    PARSER.declareObject(AggregationContainer::setDerivative, (p, t) -> DerivativeAggregation.PARSER.apply(p, t), DERIVATIVE);
    PARSER.declareObject(AggregationContainer::setExtendedStats, (p, t) -> ExtendedStatsAggregation.PARSER.apply(p, t), EXTENDED_STATS);
    PARSER.declareObject(AggregationContainer::setExtendedStatsBucket, (p, t) -> ExtendedStatsBucketAggregation.PARSER.apply(p, t), EXTENDED_STATS_BUCKET);
    PARSER.declareObject(AggregationContainer::setFilter, (p, t) -> FilterAggregation.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(AggregationContainer::setFilters, (p, t) -> FiltersAggregation.PARSER.apply(p, t), FILTERS);
    PARSER.declareObject(AggregationContainer::setGeoBounds, (p, t) -> GeoBoundsAggregation.PARSER.apply(p, t), GEO_BOUNDS);
    PARSER.declareObject(AggregationContainer::setGeoCentroid, (p, t) -> GeoCentroidAggregation.PARSER.apply(p, t), GEO_CENTROID);
    PARSER.declareObject(AggregationContainer::setGeoDistance, (p, t) -> GeoDistanceAggregation.PARSER.apply(p, t), GEO_DISTANCE);
    PARSER.declareObject(AggregationContainer::setGeohashGrid, (p, t) -> GeoHashGridAggregation.PARSER.apply(p, t), GEOHASH_GRID);
    PARSER.declareObject(AggregationContainer::setGeotileGrid, (p, t) -> GeoTileGridAggregation.PARSER.apply(p, t), GEOTILE_GRID);
    PARSER.declareObject(AggregationContainer::setGlobal, (p, t) -> GlobalAggregation.PARSER.apply(p, t), GLOBAL);
    PARSER.declareObject(AggregationContainer::setHistogram, (p, t) -> HistogramAggregation.PARSER.apply(p, t), HISTOGRAM);
    PARSER.declareObject(AggregationContainer::setIpRange, (p, t) -> IpRangeAggregation.PARSER.apply(p, t), IP_RANGE);
    PARSER.declareObject(AggregationContainer::setMatrixStats, (p, t) -> MatrixStatsAggregation.PARSER.apply(p, t), MATRIX_STATS);
    PARSER.declareObject(AggregationContainer::setMax, (p, t) -> MaxAggregation.PARSER.apply(p, t), MAX);
    PARSER.declareObject(AggregationContainer::setMaxBucket, (p, t) -> MaxBucketAggregation.PARSER.apply(p, t), MAX_BUCKET);
    PARSER.declareObject(AggregationContainer::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), META);
    PARSER.declareObject(AggregationContainer::setMin, (p, t) -> MinAggregation.PARSER.apply(p, t), MIN);
    PARSER.declareObject(AggregationContainer::setMinBucket, (p, t) -> MinBucketAggregation.PARSER.apply(p, t), MIN_BUCKET);
    PARSER.declareObject(AggregationContainer::setMissing, (p, t) -> MissingAggregation.PARSER.apply(p, t), MISSING);
    PARSER.declareObject(AggregationContainer::setMovingAvg, (p, t) -> MovingAverageAggregation.PARSER.apply(p, t), MOVING_AVG);
    PARSER.declareObject(AggregationContainer::setMovingFn, (p, t) -> MovingFunctionAggregation.PARSER.apply(p, t), MOVING_FN);
    PARSER.declareObject(AggregationContainer::setNested, (p, t) -> NestedAggregation.PARSER.apply(p, t), NESTED);
    PARSER.declareObject(AggregationContainer::setParent, (p, t) -> ParentAggregation.PARSER.apply(p, t), PARENT);
    PARSER.declareObject(AggregationContainer::setPercentileRanks, (p, t) -> PercentileRanksAggregation.PARSER.apply(p, t), PERCENTILE_RANKS);
    PARSER.declareObject(AggregationContainer::setPercentiles, (p, t) -> PercentilesAggregation.PARSER.apply(p, t), PERCENTILES);
    PARSER.declareObject(AggregationContainer::setPercentilesBucket, (p, t) -> PercentilesBucketAggregation.PARSER.apply(p, t), PERCENTILES_BUCKET);
    PARSER.declareObject(AggregationContainer::setRange, (p, t) -> RangeAggregation.PARSER.apply(p, t), RANGE);
    PARSER.declareObject(AggregationContainer::setRareTerms, (p, t) -> RareTermsAggregation.PARSER.apply(p, t), RARE_TERMS);
    PARSER.declareObject(AggregationContainer::setReverseNested, (p, t) -> ReverseNestedAggregation.PARSER.apply(p, t), REVERSE_NESTED);
    PARSER.declareObject(AggregationContainer::setSampler, (p, t) -> SamplerAggregation.PARSER.apply(p, t), SAMPLER);
    PARSER.declareObject(AggregationContainer::setScriptedMetric, (p, t) -> ScriptedMetricAggregation.PARSER.apply(p, t), SCRIPTED_METRIC);
    PARSER.declareObject(AggregationContainer::setSerialDiff, (p, t) -> SerialDifferencingAggregation.PARSER.apply(p, t), SERIAL_DIFF);
    PARSER.declareObject(AggregationContainer::setSignificantTerms, (p, t) -> SignificantTermsAggregation.PARSER.apply(p, t), SIGNIFICANT_TERMS);
    PARSER.declareObject(AggregationContainer::setSignificantText, (p, t) -> SignificantTextAggregation.PARSER.apply(p, t), SIGNIFICANT_TEXT);
    PARSER.declareObject(AggregationContainer::setStats, (p, t) -> StatsAggregation.PARSER.apply(p, t), STATS);
    PARSER.declareObject(AggregationContainer::setStatsBucket, (p, t) -> StatsBucketAggregation.PARSER.apply(p, t), STATS_BUCKET);
    PARSER.declareObject(AggregationContainer::setSum, (p, t) -> SumAggregation.PARSER.apply(p, t), SUM);
    PARSER.declareObject(AggregationContainer::setSumBucket, (p, t) -> SumBucketAggregation.PARSER.apply(p, t), SUM_BUCKET);
    PARSER.declareObject(AggregationContainer::setTerms, (p, t) -> TermsAggregation.PARSER.apply(p, t), TERMS);
    PARSER.declareObject(AggregationContainer::setTopHits, (p, t) -> TopHitsAggregation.PARSER.apply(p, t), TOP_HITS);
    PARSER.declareObject(AggregationContainer::setValueCount, (p, t) -> ValueCountAggregation.PARSER.apply(p, t), VALUE_COUNT);
    PARSER.declareObject(AggregationContainer::setWeightedAvg, (p, t) -> WeightedAverageAggregation.PARSER.apply(p, t), WEIGHTED_AVG);
    PARSER.declareObject(AggregationContainer::setMedianAbsoluteDeviation, (p, t) -> MedianAbsoluteDeviationAggregation.PARSER.apply(p, t), MEDIAN_ABSOLUTE_DEVIATION);
    PARSER.declareObject(AggregationContainer::setStringStats, (p, t) -> StringStatsAggregation.PARSER.apply(p, t), STRING_STATS);
    PARSER.declareObject(AggregationContainer::setTopMetrics, (p, t) -> TopMetricsAggregation.PARSER.apply(p, t), TOP_METRICS);
  }

}
