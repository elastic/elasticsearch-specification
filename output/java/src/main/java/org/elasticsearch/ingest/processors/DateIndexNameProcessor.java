
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
import org.elasticsearch.ingest.processors.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.ingest.*;

public class DateIndexNameProcessor extends ProcessorBase implements XContentable<DateIndexNameProcessor> {
  
  static final ParseField DATE_FORMATS = new ParseField("date_formats");
  private List<String> _dateFormats;
  public List<String> getDateFormats() { return this._dateFormats; }
  public DateIndexNameProcessor setDateFormats(List<String> val) { this._dateFormats = val; return this; }

  static final ParseField DATE_ROUNDING = new ParseField("date_rounding");
  private DateRounding _dateRounding;
  public DateRounding getDateRounding() { return this._dateRounding; }
  public DateIndexNameProcessor setDateRounding(DateRounding val) { this._dateRounding = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DateIndexNameProcessor setField(String val) { this._field = val; return this; }

  static final ParseField INDEX_NAME_FORMAT = new ParseField("index_name_format");
  private String _indexNameFormat;
  public String getIndexNameFormat() { return this._indexNameFormat; }
  public DateIndexNameProcessor setIndexNameFormat(String val) { this._indexNameFormat = val; return this; }

  static final ParseField INDEX_NAME_PREFIX = new ParseField("index_name_prefix");
  private String _indexNamePrefix;
  public String getIndexNamePrefix() { return this._indexNamePrefix; }
  public DateIndexNameProcessor setIndexNamePrefix(String val) { this._indexNamePrefix = val; return this; }

  static final ParseField LOCALE = new ParseField("locale");
  private String _locale;
  public String getLocale() { return this._locale; }
  public DateIndexNameProcessor setLocale(String val) { this._locale = val; return this; }

  static final ParseField TIMEZONE = new ParseField("timezone");
  private String _timezone;
  public String getTimezone() { return this._timezone; }
  public DateIndexNameProcessor setTimezone(String val) { this._timezone = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_dateFormats != null) {
      builder.array(DATE_FORMATS.getPreferredName(), _dateFormats);
    }
    if (_dateRounding != null) {
      builder.field(DATE_ROUNDING.getPreferredName());
      _dateRounding.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_indexNameFormat != null) {
      builder.field(INDEX_NAME_FORMAT.getPreferredName(), _indexNameFormat);
    }
    if (_indexNamePrefix != null) {
      builder.field(INDEX_NAME_PREFIX.getPreferredName(), _indexNamePrefix);
    }
    if (_locale != null) {
      builder.field(LOCALE.getPreferredName(), _locale);
    }
    if (_timezone != null) {
      builder.field(TIMEZONE.getPreferredName(), _timezone);
    }
  }

  @Override
  public DateIndexNameProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateIndexNameProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateIndexNameProcessor, Void> PARSER =
    new ObjectParser<>(DateIndexNameProcessor.class.getName(), false, DateIndexNameProcessor::new);

  static {
    PARSER.declareStringArray(DateIndexNameProcessor::setDateFormats, DATE_FORMATS);
    PARSER.declareField(DateIndexNameProcessor::setDateRounding, (p, t) -> DateRounding.PARSER.apply(p), DATE_ROUNDING, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(DateIndexNameProcessor::setField, FIELD);
    PARSER.declareString(DateIndexNameProcessor::setIndexNameFormat, INDEX_NAME_FORMAT);
    PARSER.declareString(DateIndexNameProcessor::setIndexNamePrefix, INDEX_NAME_PREFIX);
    PARSER.declareString(DateIndexNameProcessor::setLocale, LOCALE);
    PARSER.declareString(DateIndexNameProcessor::setTimezone, TIMEZONE);
  }

}
