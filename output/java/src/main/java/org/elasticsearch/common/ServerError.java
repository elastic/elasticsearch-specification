
package org.elasticsearch.common;

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

public class ServerError  implements XContentable<ServerError> {
  
  static final ParseField ERROR = new ParseField("error");
  private MainError _error;
  public MainError getError() { return this._error; }
  public ServerError setError(MainError val) { this._error = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Integer _status;
  public Integer getStatus() { return this._status; }
  public ServerError setStatus(Integer val) { this._status = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_error != null) {
      builder.field(ERROR.getPreferredName());
      _error.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ServerError fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ServerError.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ServerError, Void> PARSER =
    new ObjectParser<>(ServerError.class.getName(), false, ServerError::new);

  static {
    PARSER.declareObject(ServerError::setError, (p, t) -> MainError.PARSER.apply(p, t), ERROR);
    PARSER.declareInt(ServerError::setStatus, STATUS);
  }

}
