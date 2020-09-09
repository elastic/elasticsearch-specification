@class_serializer("CompositeAggregationSourceFormatter")
class CompositeAggregationSource {
  // field: Field;
  // missing_bucket: boolean;
  // name: string;
  // order: SortOrder;
  // source_type: string;
  terms: TermsAggregation;
  histogram: HistogramAggregation;
  date_histogram: DateHistogramAggregation;
  geotile_grid: GeoTileGridAggregation;
}
