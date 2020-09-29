
package org.elasticsearch.x_pack.machine_learning.preview_datafeed;

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

public class PreviewDatafeedRequest extends RequestBase<PreviewDatafeedRequest> implements XContentable<PreviewDatafeedRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
