
package org.elasticsearch.ingest.delete_pipeline;

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

public class DeletePipelineResponse extends AcknowledgedResponseBase implements XContentable<DeletePipelineResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeletePipelineResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeletePipelineResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeletePipelineResponse, Void> PARSER =
    new ObjectParser<>(DeletePipelineResponse.class.getName(), false, DeletePipelineResponse::new);

  static {
    
  }

}
