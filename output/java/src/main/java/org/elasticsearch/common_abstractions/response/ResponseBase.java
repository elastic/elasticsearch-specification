
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

public class ResponseBase  implements XContentable<ResponseBase> {
  
  static final ParseField DEBUG_INFORMATION = new ParseField("debug_information");
  private String _debugInformation;
  public String getDebugInformation() { return this._debugInformation; }
  public ResponseBase setDebugInformation(String val) { this._debugInformation = val; return this; }


  static final ParseField SERVER_ERROR = new ParseField("server_error");
  private ServerError _serverError;
  public ServerError getServerError() { return this._serverError; }
  public ResponseBase setServerError(ServerError val) { this._serverError = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_debugInformation != null) {
      builder.field(DEBUG_INFORMATION.getPreferredName(), _debugInformation);
    }
    if (_serverError != null) {
      builder.field(SERVER_ERROR.getPreferredName());
      _serverError.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ResponseBase, Void> PARSER =
    new ObjectParser<>(ResponseBase.class.getName(), false, ResponseBase::new);

  static {
    PARSER.declareString(ResponseBase::setDebugInformation, DEBUG_INFORMATION);
    PARSER.declareObject(ResponseBase::setServerError, (p, t) -> ServerError.PARSER.apply(p, t), SERVER_ERROR);
  }

}
