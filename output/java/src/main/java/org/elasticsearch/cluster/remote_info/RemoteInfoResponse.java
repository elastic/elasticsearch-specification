
package org.elasticsearch.cluster.remote_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.cluster.remote_info.*;

public class RemoteInfoResponse extends DictionaryResponseBase<String, RemoteInfo> implements XContentable<RemoteInfoResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RemoteInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteInfoResponse, Void> PARSER =
    new ObjectParser<>(RemoteInfoResponse.class.getName(), false, RemoteInfoResponse::new);

  static {
    
  }

}
