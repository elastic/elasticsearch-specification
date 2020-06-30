
package org.elasticsearch.ingest.processor;

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


public class GrokProcessorPatternsRequest  implements XContentable<GrokProcessorPatternsRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
