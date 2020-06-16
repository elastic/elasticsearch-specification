
package org.elasticsearch.x_pack.machine_learning.preview_datafeed;

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


public class PreviewDatafeedRequest  implements XContentable<PreviewDatafeedRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PreviewDatafeedRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PreviewDatafeedRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PreviewDatafeedRequest, Void> PARSER =
    new ObjectParser<>(PreviewDatafeedRequest.class.getName(), false, PreviewDatafeedRequest::new);

  static {
    
  }

}
