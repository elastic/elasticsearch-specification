
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

public class CsvProcessor extends ProcessorBase implements XContentable<CsvProcessor> {
  
  static final ParseField EMPTY_VALUE = new ParseField("empty_value");
  private Object _emptyValue;
  public Object getEmptyValue() { return this._emptyValue; }
  public CsvProcessor setEmptyValue(Object val) { this._emptyValue = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public CsvProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public CsvProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField QUOTE = new ParseField("quote");
  private String _quote;
  public String getQuote() { return this._quote; }
  public CsvProcessor setQuote(String val) { this._quote = val; return this; }

  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public CsvProcessor setSeparator(String val) { this._separator = val; return this; }

  static final ParseField TARGET_FIELDS = new ParseField("target_fields");
  private List<String> _targetFields;
  public List<String> getTargetFields() { return this._targetFields; }
  public CsvProcessor setTargetFields(List<String> val) { this._targetFields = val; return this; }

  static final ParseField TRIM = new ParseField("trim");
  private Boolean _trim;
  public Boolean getTrim() { return this._trim; }
  public CsvProcessor setTrim(Boolean val) { this._trim = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_emptyValue != null) {
      builder.field(EMPTY_VALUE.getPreferredName(), _emptyValue);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_quote != null) {
      builder.field(QUOTE.getPreferredName(), _quote);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
    if (_targetFields != null) {
      builder.array(TARGET_FIELDS.getPreferredName(), _targetFields);
    }
    if (_trim != null) {
      builder.field(TRIM.getPreferredName(), _trim);
    }
  }

  @Override
  public CsvProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CsvProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CsvProcessor, Void> PARSER =
    new ObjectParser<>(CsvProcessor.class.getName(), false, CsvProcessor::new);

  static {
    PARSER.declareObject(CsvProcessor::setEmptyValue, (p, t) -> p.objectText(), EMPTY_VALUE);
    PARSER.declareString(CsvProcessor::setField, FIELD);
    PARSER.declareBoolean(CsvProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(CsvProcessor::setQuote, QUOTE);
    PARSER.declareString(CsvProcessor::setSeparator, SEPARATOR);
    PARSER.declareStringArray(CsvProcessor::setTargetFields, TARGET_FIELDS);
    PARSER.declareBoolean(CsvProcessor::setTrim, TRIM);
  }

}
