
package org.elasticsearch.ingest.get_pipeline;

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
import org.elasticsearch.ingest.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetPipelineResponse extends DictionaryResponseBase<String, Pipeline> implements XContentable<GetPipelineResponse> {
  
  static final ParseField PIPELINES = new ParseField("pipelines");
  private NamedContainer<String, Pipeline> _pipelines;
  public NamedContainer<String, Pipeline> getPipelines() { return this._pipelines; }
  public GetPipelineResponse setPipelines(NamedContainer<String, Pipeline> val) { this._pipelines = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_pipelines != null) {
      builder.field(PIPELINES.getPreferredName());
      _pipelines.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetPipelineResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPipelineResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPipelineResponse, Void> PARSER =
    new ObjectParser<>(GetPipelineResponse.class.getName(), false, GetPipelineResponse::new);

  static {
    PARSER.declareObject(GetPipelineResponse::setPipelines, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Pipeline.PARSER.apply(pp, null)), PIPELINES);
  }

}
