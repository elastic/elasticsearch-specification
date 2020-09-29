
package org.elasticsearch.x_pack.security.clear_cached_realms;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class ClearCachedRealmsRequest extends RequestBase<ClearCachedRealmsRequest> implements XContentable<ClearCachedRealmsRequest> {
  
  static final ParseField USERNAMES = new ParseField("usernames");
  private List<String> _usernames;
  public List<String> getUsernames() { return this._usernames; }
  public ClearCachedRealmsRequest setUsernames(List<String> val) { this._usernames = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_usernames != null) {
      builder.array(USERNAMES.getPreferredName(), _usernames);
    }
  }

  @Override
  public ClearCachedRealmsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearCachedRealmsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearCachedRealmsRequest, Void> PARSER =
    new ObjectParser<>(ClearCachedRealmsRequest.class.getName(), false, ClearCachedRealmsRequest::new);

  static {
    PARSER.declareStringArray(ClearCachedRealmsRequest::setUsernames, USERNAMES);
  }

}
