
package org.elasticsearch.ingest.delete_pipeline;

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


public class DeletePipelineResponse  implements XContentable<DeletePipelineResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
