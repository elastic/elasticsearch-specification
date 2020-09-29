
package org.elasticsearch.x_pack.watcher.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.input.*;
import org.elasticsearch.common_options.time_unit.*;

public class SearchTransform  implements XContentable<SearchTransform> {
  
  static final ParseField REQUEST = new ParseField("request");
  private SearchInputRequest _request;
  public SearchInputRequest getRequest() { return this._request; }
  public SearchTransform setRequest(SearchInputRequest val) { this._request = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public SearchTransform setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_request != null) {
      builder.field(REQUEST.getPreferredName());
      _request.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public SearchTransform fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchTransform.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchTransform, Void> PARSER =
    new ObjectParser<>(SearchTransform.class.getName(), false, SearchTransform::new);

  static {
    PARSER.declareObject(SearchTransform::setRequest, (p, t) -> SearchInputRequest.PARSER.apply(p, t), REQUEST);
    PARSER.declareString(SearchTransform::setTimeout, TIMEOUT);
  }

}
