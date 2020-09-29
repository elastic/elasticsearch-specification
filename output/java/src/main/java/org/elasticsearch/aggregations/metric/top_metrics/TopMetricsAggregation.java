
package org.elasticsearch.aggregations.metric.top_metrics;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
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
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public TopMetricsAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public TopMetricsAggregation setSort(List<Sort> val) { this._sort = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_metrics != null) {
      builder.array(METRICS.getPreferredName(), _metrics);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
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
