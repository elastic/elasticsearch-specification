
package org.elasticsearch.aggregations.metric.top_metrics;

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
import org.elasticsearch.aggregations.metric.top_metrics.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.sort.*;

public class TopMetricsAggregation  implements XContentable<TopMetricsAggregation> {
  
  static final ParseField METRICS = new ParseField("metrics");
  private List<TopMetricsValue> _metrics;
  public List<TopMetricsValue> getMetrics() { return this._metrics; }
  public TopMetricsAggregation setMetrics(List<TopMetricsValue> val) { this._metrics = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public TopMetricsAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public TopMetricsAggregation setSort(List<Sort> val) { this._sort = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_metrics != null) {
      builder.array(METRICS.getPreferredName(), _metrics);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TopMetricsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TopMetricsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TopMetricsAggregation, Void> PARSER =
    new ObjectParser<>(TopMetricsAggregation.class.getName(), false, TopMetricsAggregation::new);

  static {
    PARSER.declareObjectArray(TopMetricsAggregation::setMetrics, (p, t) -> TopMetricsValue.PARSER.apply(p, t), METRICS);
    PARSER.declareInt(TopMetricsAggregation::setSize, SIZE);
    PARSER.declareObjectArray(TopMetricsAggregation::setSort, (p, t) -> Sort.PARSER.apply(p, t), SORT);
  }

}
