
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
import org.elasticsearch.x_pack.watcher.input.*;

public class HttpInputRequestResult extends HttpInputRequest implements XContentable<HttpInputRequestResult> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public HttpInputRequestResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpInputRequestResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpInputRequestResult, Void> PARSER =
    new ObjectParser<>(HttpInputRequestResult.class.getName(), false, HttpInputRequestResult::new);

  static {
    
  }

}
