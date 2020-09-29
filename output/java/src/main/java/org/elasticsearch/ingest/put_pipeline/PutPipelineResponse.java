
package org.elasticsearch.ingest.put_pipeline;

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

public class PutPipelineResponse extends AcknowledgedResponseBase implements XContentable<PutPipelineResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutPipelineResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPipelineResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPipelineResponse, Void> PARSER =
    new ObjectParser<>(PutPipelineResponse.class.getName(), false, PutPipelineResponse::new);

  static {
    
  }

}
