
package org.elasticsearch.common_abstractions.response;

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

public class ErrorResponse  implements XContentable<ErrorResponse> {
  
  static final ParseField ERROR = new ParseField("error");
  private MainError _error;
  public MainError getError() { return this._error; }
  public ErrorResponse setError(MainError val) { this._error = val; return this; }

  static final ParseField STATUS = new ParseField("status");
  private int _status;
  private boolean _status$isSet;
  public int getStatus() { return this._status; }
  public ErrorResponse setStatus(int val) {
    this._status = val;
    _status$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_error != null) {
      builder.field(ERROR.getPreferredName());
      _error.toXContent(builder, params);
    }
    if (_status$isSet) {
      builder.field(STATUS.getPreferredName(), _status);
    }
  }

  @Override
  public ErrorResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ErrorResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ErrorResponse, Void> PARSER =
    new ObjectParser<>(ErrorResponse.class.getName(), false, ErrorResponse::new);

  static {
    PARSER.declareObject(ErrorResponse::setError, (p, t) -> MainError.PARSER.apply(p, t), ERROR);
    PARSER.declareInt(ErrorResponse::setStatus, STATUS);
  }

}
