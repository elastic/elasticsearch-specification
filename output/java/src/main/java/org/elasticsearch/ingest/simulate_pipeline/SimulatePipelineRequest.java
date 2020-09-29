
package org.elasticsearch.ingest.simulate_pipeline;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.ingest.simulate_pipeline.*;
import org.elasticsearch.ingest.*;
import org.elasticsearch.common_abstractions.request.*;

public class SimulatePipelineRequest extends RequestBase<SimulatePipelineRequest> implements XContentable<SimulatePipelineRequest> {
  
  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public SimulatePipelineRequest setVerbose(Boolean val) { this._verbose = val; return this; }

  static final ParseField DOCS = new ParseField("docs");
  private List<SimulatePipelineDocument> _docs;
  public List<SimulatePipelineDocument> getDocs() { return this._docs; }
  public SimulatePipelineRequest setDocs(List<SimulatePipelineDocument> val) { this._docs = val; return this; }

  static final ParseField PIPELINE = new ParseField("pipeline");
  private Pipeline _pipeline;
  public Pipeline getPipeline() { return this._pipeline; }
  public SimulatePipelineRequest setPipeline(Pipeline val) { this._pipeline = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_verbose != null) {
      builder.field(VERBOSE.getPreferredName(), _verbose);
    }
    if (_docs != null) {
      builder.array(DOCS.getPreferredName(), _docs);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName());
      _pipeline.toXContent(builder, params);
    }
  }

  @Override
  public SimulatePipelineRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SimulatePipelineRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SimulatePipelineRequest, Void> PARSER =
    new ObjectParser<>(SimulatePipelineRequest.class.getName(), false, SimulatePipelineRequest::new);

  static {
    PARSER.declareBoolean(SimulatePipelineRequest::setVerbose, VERBOSE);
    PARSER.declareObjectArray(SimulatePipelineRequest::setDocs, (p, t) -> SimulatePipelineDocument.PARSER.apply(p, t), DOCS);
    PARSER.declareObject(SimulatePipelineRequest::setPipeline, (p, t) -> Pipeline.PARSER.apply(p, t), PIPELINE);
  }

}
