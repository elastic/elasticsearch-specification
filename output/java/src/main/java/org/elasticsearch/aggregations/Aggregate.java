
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


public class Aggregate  implements XContentable<Aggregate> {
  
  static final ParseField META = new ParseField("meta");
  private NamedContainer<String, Object> _meta;
  public NamedContainer<String, Object> getMeta() { return this._meta; }
  public Aggregate setMeta(NamedContainer<String, Object> val) { this._meta = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_meta != null) {
      builder.field(META.getPreferredName());
      _meta.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Aggregate fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Aggregate.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Aggregate, Void> PARSER =
    new ObjectParser<>(Aggregate.class.getName(), false, Aggregate::new);

  static {
    PARSER.declareObject(Aggregate::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), META);
  }

}
