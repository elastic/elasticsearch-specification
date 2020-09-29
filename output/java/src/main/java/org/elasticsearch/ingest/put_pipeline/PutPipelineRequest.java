
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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.ingest.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutPipelineRequest extends RequestBase<PutPipelineRequest> implements XContentable<PutPipelineRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public PutPipelineRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public PutPipelineRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutPipelineRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField ON_FAILURE = new ParseField("on_failure");
  private List<ProcessorContainer> _onFailure;
  public List<ProcessorContainer> getOnFailure() { return this._onFailure; }
  public PutPipelineRequest setOnFailure(List<ProcessorContainer> val) { this._onFailure = val; return this; }

  static final ParseField PROCESSORS = new ParseField("processors");
  private List<ProcessorContainer> _processors;
  public List<ProcessorContainer> getProcessors() { return this._processors; }
  public PutPipelineRequest setProcessors(List<ProcessorContainer> val) { this._processors = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_onFailure != null) {
      builder.array(ON_FAILURE.getPreferredName(), _onFailure);
    }
    if (_processors != null) {
      builder.array(PROCESSORS.getPreferredName(), _processors);
    }
  }

  @Override
  public PutPipelineRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPipelineRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPipelineRequest, Void> PARSER =
    new ObjectParser<>(PutPipelineRequest.class.getName(), false, PutPipelineRequest::new);

  static {
    PARSER.declareString(PutPipelineRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(PutPipelineRequest::setTimeout, TIMEOUT);
    PARSER.declareString(PutPipelineRequest::setDescription, DESCRIPTION);
    PARSER.declareObjectArray(PutPipelineRequest::setOnFailure, (p, t) -> ProcessorContainer.PARSER.apply(p, t), ON_FAILURE);
    PARSER.declareObjectArray(PutPipelineRequest::setProcessors, (p, t) -> ProcessorContainer.PARSER.apply(p, t), PROCESSORS);
  }

}
