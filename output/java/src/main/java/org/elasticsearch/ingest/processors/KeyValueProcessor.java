
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

public class KeyValueProcessor extends ProcessorBase implements XContentable<KeyValueProcessor> {
  
  static final ParseField EXCLUDE_KEYS = new ParseField("exclude_keys");
  private List<String> _excludeKeys;
  public List<String> getExcludeKeys() { return this._excludeKeys; }
  public KeyValueProcessor setExcludeKeys(List<String> val) { this._excludeKeys = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public KeyValueProcessor setField(String val) { this._field = val; return this; }

  static final ParseField FIELD_SPLIT = new ParseField("field_split");
  private String _fieldSplit;
  public String getFieldSplit() { return this._fieldSplit; }
  public KeyValueProcessor setFieldSplit(String val) { this._fieldSplit = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public KeyValueProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField INCLUDE_KEYS = new ParseField("include_keys");
  private List<String> _includeKeys;
  public List<String> getIncludeKeys() { return this._includeKeys; }
  public KeyValueProcessor setIncludeKeys(List<String> val) { this._includeKeys = val; return this; }

  static final ParseField PREFIX = new ParseField("prefix");
  private String _prefix;
  public String getPrefix() { return this._prefix; }
  public KeyValueProcessor setPrefix(String val) { this._prefix = val; return this; }

  static final ParseField STRIP_BRACKETS = new ParseField("strip_brackets");
  private Boolean _stripBrackets;
  public Boolean getStripBrackets() { return this._stripBrackets; }
  public KeyValueProcessor setStripBrackets(Boolean val) { this._stripBrackets = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public KeyValueProcessor setTargetField(String val) { this._targetField = val; return this; }

  static final ParseField TRIM_KEY = new ParseField("trim_key");
  private String _trimKey;
  public String getTrimKey() { return this._trimKey; }
  public KeyValueProcessor setTrimKey(String val) { this._trimKey = val; return this; }

  static final ParseField TRIM_VALUE = new ParseField("trim_value");
  private String _trimValue;
  public String getTrimValue() { return this._trimValue; }
  public KeyValueProcessor setTrimValue(String val) { this._trimValue = val; return this; }

  static final ParseField VALUE_SPLIT = new ParseField("value_split");
  private String _valueSplit;
  public String getValueSplit() { return this._valueSplit; }
  public KeyValueProcessor setValueSplit(String val) { this._valueSplit = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_excludeKeys != null) {
      builder.array(EXCLUDE_KEYS.getPreferredName(), _excludeKeys);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_fieldSplit != null) {
      builder.field(FIELD_SPLIT.getPreferredName(), _fieldSplit);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_includeKeys != null) {
      builder.array(INCLUDE_KEYS.getPreferredName(), _includeKeys);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
    if (_stripBrackets != null) {
      builder.field(STRIP_BRACKETS.getPreferredName(), _stripBrackets);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
    if (_trimKey != null) {
      builder.field(TRIM_KEY.getPreferredName(), _trimKey);
    }
    if (_trimValue != null) {
      builder.field(TRIM_VALUE.getPreferredName(), _trimValue);
    }
    if (_valueSplit != null) {
      builder.field(VALUE_SPLIT.getPreferredName(), _valueSplit);
    }
  }

  @Override
  public KeyValueProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeyValueProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeyValueProcessor, Void> PARSER =
    new ObjectParser<>(KeyValueProcessor.class.getName(), false, KeyValueProcessor::new);

  static {
    PARSER.declareStringArray(KeyValueProcessor::setExcludeKeys, EXCLUDE_KEYS);
    PARSER.declareString(KeyValueProcessor::setField, FIELD);
    PARSER.declareString(KeyValueProcessor::setFieldSplit, FIELD_SPLIT);
    PARSER.declareBoolean(KeyValueProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareStringArray(KeyValueProcessor::setIncludeKeys, INCLUDE_KEYS);
    PARSER.declareString(KeyValueProcessor::setPrefix, PREFIX);
    PARSER.declareBoolean(KeyValueProcessor::setStripBrackets, STRIP_BRACKETS);
    PARSER.declareString(KeyValueProcessor::setTargetField, TARGET_FIELD);
    PARSER.declareString(KeyValueProcessor::setTrimKey, TRIM_KEY);
    PARSER.declareString(KeyValueProcessor::setTrimValue, TRIM_VALUE);
    PARSER.declareString(KeyValueProcessor::setValueSplit, VALUE_SPLIT);
  }

}
