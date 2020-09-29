
package org.elasticsearch.x_pack.watcher.execution;

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

public class HttpInputResponseResult  implements XContentable<HttpInputResponseResult> {
  
  static final ParseField BODY = new ParseField("body");
  private String _body;
  public String getBody() { return this._body; }
  public HttpInputResponseResult setBody(String val) { this._body = val; return this; }

  static final ParseField HEADERS = new ParseField("headers");
  private NamedContainer<String, List<String>> _headers;
  public NamedContainer<String, List<String>> getHeaders() { return this._headers; }
  public HttpInputResponseResult setHeaders(NamedContainer<String, List<String>> val) { this._headers = val; return this; }

  static final ParseField STATUS = new ParseField("status");
  private int _status;
  private boolean _status$isSet;
  public int getStatus() { return this._status; }
  public HttpInputResponseResult setStatus(int val) {
    this._status = val;
    _status$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_body != null) {
      builder.field(BODY.getPreferredName(), _body);
    }
    if (_headers != null) {
      builder.field(HEADERS.getPreferredName());
      _headers.toXContent(builder, params);
    }
    if (_status$isSet) {
      builder.field(STATUS.getPreferredName(), _status);
    }
  }

  @Override
  public HttpInputResponseResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpInputResponseResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpInputResponseResult, Void> PARSER =
    new ObjectParser<>(HttpInputResponseResult.class.getName(), false, HttpInputResponseResult::new);

  static {
    PARSER.declareString(HttpInputResponseResult::setBody, BODY);
    PARSER.declareObject(HttpInputResponseResult::setHeaders, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<String> */), HEADERS);
    PARSER.declareInt(HttpInputResponseResult::setStatus, STATUS);
  }

}
