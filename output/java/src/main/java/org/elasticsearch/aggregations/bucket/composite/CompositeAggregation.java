
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
import org.elasticsearch.internal.*;
import org.elasticsearch.aggregations.bucket.composite.*;

public class CompositeAggregation  implements XContentable<CompositeAggregation> {
  
  static final ParseField AFTER = new ParseField("after");
  private NamedContainer<String, Union2<String, Float>> _after;
  public NamedContainer<String, Union2<String, Float>> getAfter() { return this._after; }
  public CompositeAggregation setAfter(NamedContainer<String, Union2<String, Float>> val) { this._after = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public CompositeAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SOURCES = new ParseField("sources");
  private List<NamedContainer<String, CompositeAggregationSource>> _sources;
  public List<NamedContainer<String, CompositeAggregationSource>> getSources() { return this._sources; }
  public CompositeAggregation setSources(List<NamedContainer<String, CompositeAggregationSource>> val) { this._sources = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_after != null) {
      builder.field(AFTER.getPreferredName());
      _after.toXContent(builder, params);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sources != null) {
      builder.array(SOURCES.getPreferredName(), _sources);
    }
  }

  @Override
  public CompositeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompositeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompositeAggregation, Void> PARSER =
    new ObjectParser<>(CompositeAggregation.class.getName(), false, CompositeAggregation::new);

  static {
    PARSER.declareObject(CompositeAggregation::setAfter, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO Union2<String, Float> */), AFTER);
    PARSER.declareInt(CompositeAggregation::setSize, SIZE);
    PARSER.declareObjectArray(CompositeAggregation::setSources, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> CompositeAggregationSource.PARSER.apply(pp, null)), SOURCES);
  }

}
