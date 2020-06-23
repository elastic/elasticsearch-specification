
package org.elasticsearch.internal;

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

public class MainError  implements XContentable<MainError> {
  
  static final ParseField HEADERS = new ParseField("headers");
  private NamedContainer<String, String> _headers;
  public NamedContainer<String, String> getHeaders() { return this._headers; }
  public MainError setHeaders(NamedContainer<String, String> val) { this._headers = val; return this; }


  static final ParseField ROOT_CAUSE = new ParseField("root_cause");
  private List<ErrorCause> _rootCause;
  public List<ErrorCause> getRootCause() { return this._rootCause; }
  public MainError setRootCause(List<ErrorCause> val) { this._rootCause = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_headers != null) {
      builder.field(HEADERS.getPreferredName());
      _headers.toXContent(builder, params);
    }
    if (_rootCause != null) {
      builder.array(ROOT_CAUSE.getPreferredName(), _rootCause);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MainError fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MainError.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MainError, Void> PARSER =
    new ObjectParser<>(MainError.class.getName(), false, MainError::new);

  static {
    PARSER.declareObject(MainError::setHeaders, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), HEADERS);
    PARSER.declareObjectArray(MainError::setRootCause, (p, t) -> ErrorCause.PARSER.apply(p, t), ROOT_CAUSE);
  }

}
