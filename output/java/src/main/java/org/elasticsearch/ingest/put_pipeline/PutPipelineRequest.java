
package org.elasticsearch.ingest.put_pipeline;

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
import org.elasticsearch.common_options.time_unit.*;

public class PutPipelineRequest  implements XContentable<PutPipelineRequest> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutPipelineRequest setDescription(String val) { this._description = val; return this; }


  static final ParseField ON_FAILURE = new ParseField("on_failure");
  private List<Processor> _onFailure;
  public List<Processor> getOnFailure() { return this._onFailure; }
  public PutPipelineRequest setOnFailure(List<Processor> val) { this._onFailure = val; return this; }


  static final ParseField PROCESSORS = new ParseField("processors");
  private List<Processor> _processors;
  public List<Processor> getProcessors() { return this._processors; }
  public PutPipelineRequest setProcessors(List<Processor> val) { this._processors = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public PutPipelineRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public PutPipelineRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_onFailure != null) {
      builder.array(ON_FAILURE.getPreferredName(), _onFailure);
    }
    if (_processors != null) {
      builder.array(PROCESSORS.getPreferredName(), _processors);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutPipelineRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPipelineRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPipelineRequest, Void> PARSER =
    new ObjectParser<>(PutPipelineRequest.class.getName(), false, PutPipelineRequest::new);

  static {
    PARSER.declareString(PutPipelineRequest::setDescription, DESCRIPTION);
    PARSER.declareObjectArray(PutPipelineRequest::setOnFailure, (p, t) -> Processor.PARSER.apply(p, t), ON_FAILURE);
    PARSER.declareObjectArray(PutPipelineRequest::setProcessors, (p, t) -> Processor.PARSER.apply(p, t), PROCESSORS);
    PARSER.declareObject(PutPipelineRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(PutPipelineRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
