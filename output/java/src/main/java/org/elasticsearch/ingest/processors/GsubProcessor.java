
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

public class GsubProcessor extends ProcessorBase implements XContentable<GsubProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GsubProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public GsubProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public GsubProcessor setPattern(String val) { this._pattern = val; return this; }

  static final ParseField REPLACEMENT = new ParseField("replacement");
  private String _replacement;
  public String getReplacement() { return this._replacement; }
  public GsubProcessor setReplacement(String val) { this._replacement = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public GsubProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    if (_replacement != null) {
      builder.field(REPLACEMENT.getPreferredName(), _replacement);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public GsubProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GsubProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GsubProcessor, Void> PARSER =
    new ObjectParser<>(GsubProcessor.class.getName(), false, GsubProcessor::new);

  static {
    PARSER.declareString(GsubProcessor::setField, FIELD);
    PARSER.declareBoolean(GsubProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(GsubProcessor::setPattern, PATTERN);
    PARSER.declareString(GsubProcessor::setReplacement, REPLACEMENT);
    PARSER.declareString(GsubProcessor::setTargetField, TARGET_FIELD);
  }

}
