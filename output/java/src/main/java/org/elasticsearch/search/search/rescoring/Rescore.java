
package org.elasticsearch.search.search.rescoring;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
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
  private int _windowSize;
  private boolean _windowSize$isSet;
  public int getWindowSize() { return this._windowSize; }
  public Rescore setWindowSize(int val) {
    this._windowSize = val;
    _windowSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_windowSize$isSet) {
      builder.field(WINDOW_SIZE.getPreferredName(), _windowSize);
    }
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
