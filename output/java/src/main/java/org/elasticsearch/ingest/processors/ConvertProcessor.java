
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
import org.elasticsearch.ingest.processors.*;
import org.elasticsearch.ingest.*;

public class ConvertProcessor extends ProcessorBase implements XContentable<ConvertProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public ConvertProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public ConvertProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public ConvertProcessor setTargetField(String val) { this._targetField = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private ConvertProcessorType _type;
  public ConvertProcessorType getType() { return this._type; }
  public ConvertProcessor setType(ConvertProcessorType val) { this._type = val; return this; }


  
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
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
  }

  @Override
  public ConvertProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ConvertProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ConvertProcessor, Void> PARSER =
    new ObjectParser<>(ConvertProcessor.class.getName(), false, ConvertProcessor::new);

  static {
    PARSER.declareString(ConvertProcessor::setField, FIELD);
    PARSER.declareBoolean(ConvertProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareString(ConvertProcessor::setTargetField, TARGET_FIELD);
    PARSER.declareField(ConvertProcessor::setType, (p, t) -> ConvertProcessorType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
