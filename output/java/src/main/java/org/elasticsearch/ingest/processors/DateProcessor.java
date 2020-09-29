
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

public class DateProcessor extends ProcessorBase implements XContentable<DateProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DateProcessor setField(String val) { this._field = val; return this; }

  static final ParseField FORMATS = new ParseField("formats");
  private List<String> _formats;
  public List<String> getFormats() { return this._formats; }
  public DateProcessor setFormats(List<String> val) { this._formats = val; return this; }

  static final ParseField LOCALE = new ParseField("locale");
  private String _locale;
  public String getLocale() { return this._locale; }
  public DateProcessor setLocale(String val) { this._locale = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public DateProcessor setTargetField(String val) { this._targetField = val; return this; }

  static final ParseField TIMEZONE = new ParseField("timezone");
  private String _timezone;
  public String getTimezone() { return this._timezone; }
  public DateProcessor setTimezone(String val) { this._timezone = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_formats != null) {
      builder.array(FORMATS.getPreferredName(), _formats);
    }
    if (_locale != null) {
      builder.field(LOCALE.getPreferredName(), _locale);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
    if (_timezone != null) {
      builder.field(TIMEZONE.getPreferredName(), _timezone);
    }
  }

  @Override
  public DateProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateProcessor, Void> PARSER =
    new ObjectParser<>(DateProcessor.class.getName(), false, DateProcessor::new);

  static {
    PARSER.declareString(DateProcessor::setField, FIELD);
    PARSER.declareStringArray(DateProcessor::setFormats, FORMATS);
    PARSER.declareString(DateProcessor::setLocale, LOCALE);
    PARSER.declareString(DateProcessor::setTargetField, TARGET_FIELD);
    PARSER.declareString(DateProcessor::setTimezone, TIMEZONE);
  }

}
