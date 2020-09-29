
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

public class TrimProcessor extends ProcessorBase implements XContentable<TrimProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public TrimProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public TrimProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public TrimProcessor setTargetField(String val) { this._targetField = val; return this; }


  
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
  public TrimProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TrimProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TrimProcessor, Void> PARSER =
    new ObjectParser<>(TrimProcessor.class.getName(), false, TrimProcessor::new);

  static {
    PARSER.declareString(TrimProcessor::setField, FIELD);
    PARSER.declareBoolean(TrimProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(TrimProcessor::setTargetField, TARGET_FIELD);
  }

}
