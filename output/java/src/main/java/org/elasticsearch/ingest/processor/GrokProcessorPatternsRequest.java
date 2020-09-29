
package org.elasticsearch.ingest.processor;

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

public class GrokProcessorPatternsRequest extends RequestBase<GrokProcessorPatternsRequest> implements XContentable<GrokProcessorPatternsRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GrokProcessorPatternsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GrokProcessorPatternsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GrokProcessorPatternsRequest, Void> PARSER =
    new ObjectParser<>(GrokProcessorPatternsRequest.class.getName(), false, GrokProcessorPatternsRequest::new);

  static {
    
  }

}
