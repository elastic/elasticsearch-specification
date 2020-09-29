
package org.elasticsearch.ingest.processors.plugins;

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

public class AttachmentProcessor extends ProcessorBase implements XContentable<AttachmentProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public AttachmentProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public AttachmentProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField INDEXED_CHARS = new ParseField("indexed_chars");
  private long _indexedChars;
  private boolean _indexedChars$isSet;
  public long getIndexedChars() { return this._indexedChars; }
  public AttachmentProcessor setIndexedChars(long val) {
    this._indexedChars = val;
    _indexedChars$isSet = true;
    return this;
  }

  static final ParseField INDEXED_CHARS_FIELD = new ParseField("indexed_chars_field");
  private String _indexedCharsField;
  public String getIndexedCharsField() { return this._indexedCharsField; }
  public AttachmentProcessor setIndexedCharsField(String val) { this._indexedCharsField = val; return this; }

  static final ParseField PROPERTIES = new ParseField("properties");
  private List<String> _properties;
  public List<String> getProperties() { return this._properties; }
  public AttachmentProcessor setProperties(List<String> val) { this._properties = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public AttachmentProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_indexedChars$isSet) {
      builder.field(INDEXED_CHARS.getPreferredName(), _indexedChars);
    }
    if (_indexedCharsField != null) {
      builder.field(INDEXED_CHARS_FIELD.getPreferredName(), _indexedCharsField);
    }
    if (_properties != null) {
      builder.array(PROPERTIES.getPreferredName(), _properties);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public AttachmentProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AttachmentProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AttachmentProcessor, Void> PARSER =
    new ObjectParser<>(AttachmentProcessor.class.getName(), false, AttachmentProcessor::new);

  static {
    PARSER.declareString(AttachmentProcessor::setField, FIELD);
    PARSER.declareBoolean(AttachmentProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareLong(AttachmentProcessor::setIndexedChars, INDEXED_CHARS);
    PARSER.declareString(AttachmentProcessor::setIndexedCharsField, INDEXED_CHARS_FIELD);
    PARSER.declareStringArray(AttachmentProcessor::setProperties, PROPERTIES);
    PARSER.declareString(AttachmentProcessor::setTargetField, TARGET_FIELD);
  }

}
