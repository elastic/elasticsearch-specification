
package org.elasticsearch.aggregations.bucket.composite;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.aggregations.bucket.date_histogram.*;
import org.elasticsearch.aggregations.bucket.geo_tile_grid.*;

public class CompositeAggregationSource  implements XContentable<CompositeAggregationSource> {
  
  static final ParseField TERMS = new ParseField("terms");
  private TermsAggregation _terms;
  public TermsAggregation getTerms() { return this._terms; }
  public CompositeAggregationSource setTerms(TermsAggregation val) { this._terms = val; return this; }

  static final ParseField HISTOGRAM = new ParseField("histogram");
  private HistogramAggregation _histogram;
  public HistogramAggregation getHistogram() { return this._histogram; }
  public CompositeAggregationSource setHistogram(HistogramAggregation val) { this._histogram = val; return this; }

  static final ParseField DATE_HISTOGRAM = new ParseField("date_histogram");
  private DateHistogramAggregation _dateHistogram;
  public DateHistogramAggregation getDateHistogram() { return this._dateHistogram; }
  public CompositeAggregationSource setDateHistogram(DateHistogramAggregation val) { this._dateHistogram = val; return this; }

  static final ParseField GEOTILE_GRID = new ParseField("geotile_grid");
  private GeoTileGridAggregation _geotileGrid;
  public GeoTileGridAggregation getGeotileGrid() { return this._geotileGrid; }
  public CompositeAggregationSource setGeotileGrid(GeoTileGridAggregation val) { this._geotileGrid = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_terms != null) {
      builder.field(TERMS.getPreferredName());
      _terms.toXContent(builder, params);
    }
    if (_histogram != null) {
      builder.field(HISTOGRAM.getPreferredName());
      _histogram.toXContent(builder, params);
    }
    if (_dateHistogram != null) {
      builder.field(DATE_HISTOGRAM.getPreferredName());
      _dateHistogram.toXContent(builder, params);
    }
    if (_geotileGrid != null) {
      builder.field(GEOTILE_GRID.getPreferredName());
      _geotileGrid.toXContent(builder, params);
    }
  }

  @Override
  public CompositeAggregationSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompositeAggregationSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompositeAggregationSource, Void> PARSER =
    new ObjectParser<>(CompositeAggregationSource.class.getName(), false, CompositeAggregationSource::new);

  static {
    PARSER.declareObject(CompositeAggregationSource::setTerms, (p, t) -> TermsAggregation.PARSER.apply(p, t), TERMS);
    PARSER.declareObject(CompositeAggregationSource::setHistogram, (p, t) -> HistogramAggregation.PARSER.apply(p, t), HISTOGRAM);
    PARSER.declareObject(CompositeAggregationSource::setDateHistogram, (p, t) -> DateHistogramAggregation.PARSER.apply(p, t), DATE_HISTOGRAM);
    PARSER.declareObject(CompositeAggregationSource::setGeotileGrid, (p, t) -> GeoTileGridAggregation.PARSER.apply(p, t), GEOTILE_GRID);
  }

}
