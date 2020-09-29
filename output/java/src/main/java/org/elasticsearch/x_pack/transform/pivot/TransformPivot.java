
package org.elasticsearch.x_pack.transform.pivot;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.x_pack.transform.pivot.*;
import org.elasticsearch.internal.*;

public class TransformPivot  implements XContentable<TransformPivot> {
  
  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public TransformPivot setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }

  static final ParseField GROUP_BY = new ParseField("group_by");
  private NamedContainer<String, SingleGroupSource> _groupBy;
  public NamedContainer<String, SingleGroupSource> getGroupBy() { return this._groupBy; }
  public TransformPivot setGroupBy(NamedContainer<String, SingleGroupSource> val) { this._groupBy = val; return this; }

  static final ParseField MAX_PAGE_SEARCH_SIZE = new ParseField("max_page_search_size");
  private int _maxPageSearchSize;
  private boolean _maxPageSearchSize$isSet;
  public int getMaxPageSearchSize() { return this._maxPageSearchSize; }
  public TransformPivot setMaxPageSearchSize(int val) {
    this._maxPageSearchSize = val;
    _maxPageSearchSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_groupBy != null) {
      builder.field(GROUP_BY.getPreferredName());
      _groupBy.toXContent(builder, params);
    }
    if (_maxPageSearchSize$isSet) {
      builder.field(MAX_PAGE_SEARCH_SIZE.getPreferredName(), _maxPageSearchSize);
    }
  }

  @Override
  public TransformPivot fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformPivot.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformPivot, Void> PARSER =
    new ObjectParser<>(TransformPivot.class.getName(), false, TransformPivot::new);

  static {
    PARSER.declareObject(TransformPivot::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(TransformPivot::setGroupBy, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SingleGroupSource.PARSER.apply(pp, null)), GROUP_BY);
    PARSER.declareInt(TransformPivot::setMaxPageSearchSize, MAX_PAGE_SEARCH_SIZE);
  }

}
