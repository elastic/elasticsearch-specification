
package org.elasticsearch.ingest.get_pipeline;

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
import org.elasticsearch.ingest.*;

public class GetPipelineResponse extends DictionaryResponseBase<String, Pipeline> implements XContentable<GetPipelineResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetPipelineResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPipelineResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPipelineResponse, Void> PARSER =
    new ObjectParser<>(GetPipelineResponse.class.getName(), false, GetPipelineResponse::new);

  static {
    
  }

}
