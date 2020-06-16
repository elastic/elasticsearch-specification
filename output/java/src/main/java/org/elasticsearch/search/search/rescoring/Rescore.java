
package org.elasticsearch.search.search.rescoring;

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
import org.elasticsearch.search.search.rescoring.*;
import org.elasticsearch.internal.*;

public class Rescore  implements XContentable<Rescore> {
  
  static final ParseField QUERY = new ParseField("query");
  private RescoreQuery _query;
  public RescoreQuery getQuery() { return this._query; }
  public Rescore setQuery(RescoreQuery val) { this._query = val; return this; }


  static final ParseField WINDOW_SIZE = new ParseField("window_size");
  private Integer _windowSize;
  public Integer getWindowSize() { return this._windowSize; }
  public Rescore setWindowSize(Integer val) { this._windowSize = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_windowSize != null) {
      builder.field(WINDOW_SIZE.getPreferredName(), _windowSize);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Rescore fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Rescore.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Rescore, Void> PARSER =
    new ObjectParser<>(Rescore.class.getName(), false, Rescore::new);

  static {
    PARSER.declareObject(Rescore::setQuery, (p, t) -> RescoreQuery.PARSER.apply(p, t), QUERY);
    PARSER.declareInt(Rescore::setWindowSize, WINDOW_SIZE);
  }

}
