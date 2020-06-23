
package org.elasticsearch.x_pack.transform.pivot;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.x_pack.transform.pivot.*;

public class TransformPivot  implements XContentable<TransformPivot> {
  
  static final ParseField MAX_PAGE_SEARCH_SIZE = new ParseField("max_page_search_size");
  private Integer _maxPageSearchSize;
  public Integer getMaxPageSearchSize() { return this._maxPageSearchSize; }
  public TransformPivot setMaxPageSearchSize(Integer val) { this._maxPageSearchSize = val; return this; }


  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public TransformPivot setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }


  static final ParseField GROUP_BY = new ParseField("group_by");
  private NamedContainer<String, SingleGroupSource> _groupBy;
  public NamedContainer<String, SingleGroupSource> getGroupBy() { return this._groupBy; }
  public TransformPivot setGroupBy(NamedContainer<String, SingleGroupSource> val) { this._groupBy = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxPageSearchSize != null) {
      builder.field(MAX_PAGE_SEARCH_SIZE.getPreferredName(), _maxPageSearchSize);
    }
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_groupBy != null) {
      builder.field(GROUP_BY.getPreferredName());
      _groupBy.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformPivot fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformPivot.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformPivot, Void> PARSER =
    new ObjectParser<>(TransformPivot.class.getName(), false, TransformPivot::new);

  static {
    PARSER.declareInt(TransformPivot::setMaxPageSearchSize, MAX_PAGE_SEARCH_SIZE);
    PARSER.declareObject(TransformPivot::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(TransformPivot::setGroupBy, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SingleGroupSource.PARSER.apply(pp, null)), GROUP_BY);
  }

}
