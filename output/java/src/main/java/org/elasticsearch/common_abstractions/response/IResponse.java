
package org.elasticsearch.common_abstractions.response;

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
import org.elasticsearch.common.*;

public class IResponse  implements XContentable<IResponse> {
  
  static final ParseField SERVER_ERROR = new ParseField("server_error");
  private ServerError _serverError;
  public ServerError getServerError() { return this._serverError; }
  public IResponse setServerError(ServerError val) { this._serverError = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_serverError != null) {
      builder.field(SERVER_ERROR.getPreferredName());
      _serverError.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IResponse, Void> PARSER =
    new ObjectParser<>(IResponse.class.getName(), false, IResponse::new);

  static {
    PARSER.declareObject(IResponse::setServerError, (p, t) -> ServerError.PARSER.apply(p, t), SERVER_ERROR);
  }

}
