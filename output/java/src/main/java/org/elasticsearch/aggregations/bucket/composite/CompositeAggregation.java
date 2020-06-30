
package org.elasticsearch.aggregations.bucket.composite;

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
import org.elasticsearch.aggregations.bucket.composite.*;

public class CompositeAggregation  implements XContentable<CompositeAggregation> {
  
  static final ParseField AFTER = new ParseField("after");
  private NamedContainer<String, Object> _after;
  public NamedContainer<String, Object> getAfter() { return this._after; }
  public CompositeAggregation setAfter(NamedContainer<String, Object> val) { this._after = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public CompositeAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField SOURCES = new ParseField("sources");
  private List<CompositeAggregationSource> _sources;
  public List<CompositeAggregationSource> getSources() { return this._sources; }
  public CompositeAggregation setSources(List<CompositeAggregationSource> val) { this._sources = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_after != null) {
      builder.field(AFTER.getPreferredName());
      _after.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sources != null) {
      builder.array(SOURCES.getPreferredName(), _sources);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CompositeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompositeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompositeAggregation, Void> PARSER =
    new ObjectParser<>(CompositeAggregation.class.getName(), false, CompositeAggregation::new);

  static {
    PARSER.declareObject(CompositeAggregation::setAfter, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), AFTER);
    PARSER.declareInt(CompositeAggregation::setSize, SIZE);
    PARSER.declareObjectArray(CompositeAggregation::setSources, (p, t) -> CompositeAggregationSource.PARSER.apply(p, t), SOURCES);
  }

}
