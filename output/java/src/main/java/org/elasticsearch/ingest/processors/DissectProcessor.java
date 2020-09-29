
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

public class DissectProcessor extends ProcessorBase implements XContentable<DissectProcessor> {
  
  static final ParseField APPEND_SEPARATOR = new ParseField("append_separator");
  private String _appendSeparator;
  public String getAppendSeparator() { return this._appendSeparator; }
  public DissectProcessor setAppendSeparator(String val) { this._appendSeparator = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DissectProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public DissectProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public DissectProcessor setPattern(String val) { this._pattern = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_appendSeparator != null) {
      builder.field(APPEND_SEPARATOR.getPreferredName(), _appendSeparator);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
  }

  @Override
  public DissectProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DissectProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DissectProcessor, Void> PARSER =
    new ObjectParser<>(DissectProcessor.class.getName(), false, DissectProcessor::new);

  static {
    PARSER.declareString(DissectProcessor::setAppendSeparator, APPEND_SEPARATOR);
    PARSER.declareString(DissectProcessor::setField, FIELD);
    PARSER.declareBoolean(DissectProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(DissectProcessor::setPattern, PATTERN);
  }

}
