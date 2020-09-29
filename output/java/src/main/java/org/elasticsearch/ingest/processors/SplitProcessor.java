
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

public class SplitProcessor extends ProcessorBase implements XContentable<SplitProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SplitProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public SplitProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PRESERVE_TRAILING = new ParseField("preserve_trailing");
  private Boolean _preserveTrailing;
  public Boolean getPreserveTrailing() { return this._preserveTrailing; }
  public SplitProcessor setPreserveTrailing(Boolean val) { this._preserveTrailing = val; return this; }

  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public SplitProcessor setSeparator(String val) { this._separator = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public SplitProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_preserveTrailing != null) {
      builder.field(PRESERVE_TRAILING.getPreferredName(), _preserveTrailing);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public SplitProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SplitProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SplitProcessor, Void> PARSER =
    new ObjectParser<>(SplitProcessor.class.getName(), false, SplitProcessor::new);

  static {
    PARSER.declareString(SplitProcessor::setField, FIELD);
    PARSER.declareBoolean(SplitProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareBoolean(SplitProcessor::setPreserveTrailing, PRESERVE_TRAILING);
    PARSER.declareString(SplitProcessor::setSeparator, SEPARATOR);
    PARSER.declareString(SplitProcessor::setTargetField, TARGET_FIELD);
  }

}
