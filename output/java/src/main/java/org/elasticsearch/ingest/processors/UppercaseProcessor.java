
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

public class UppercaseProcessor extends ProcessorBase implements XContentable<UppercaseProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public UppercaseProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public UppercaseProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public UppercaseProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public UppercaseProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UppercaseProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UppercaseProcessor, Void> PARSER =
    new ObjectParser<>(UppercaseProcessor.class.getName(), false, UppercaseProcessor::new);

  static {
    PARSER.declareString(UppercaseProcessor::setField, FIELD);
    PARSER.declareBoolean(UppercaseProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(UppercaseProcessor::setTargetField, TARGET_FIELD);
  }

}
