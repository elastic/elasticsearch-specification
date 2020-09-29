
package org.elasticsearch.ingest.processors;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.ingest.*;

public class ForeachProcessor extends ProcessorBase implements XContentable<ForeachProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public ForeachProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public ForeachProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PROCESSOR = new ParseField("processor");
  private ProcessorContainer _processor;
  public ProcessorContainer getProcessor() { return this._processor; }
  public ForeachProcessor setProcessor(ProcessorContainer val) { this._processor = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_processor != null) {
      builder.field(PROCESSOR.getPreferredName());
      _processor.toXContent(builder, params);
    }
  }

  @Override
  public ForeachProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForeachProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForeachProcessor, Void> PARSER =
    new ObjectParser<>(ForeachProcessor.class.getName(), false, ForeachProcessor::new);

  static {
    PARSER.declareString(ForeachProcessor::setField, FIELD);
    PARSER.declareBoolean(ForeachProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareObject(ForeachProcessor::setProcessor, (p, t) -> ProcessorContainer.PARSER.apply(p, t), PROCESSOR);
  }

}
