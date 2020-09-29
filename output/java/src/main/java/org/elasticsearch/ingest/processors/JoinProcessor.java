
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

public class JoinProcessor extends ProcessorBase implements XContentable<JoinProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public JoinProcessor setField(String val) { this._field = val; return this; }

  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public JoinProcessor setSeparator(String val) { this._separator = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public JoinProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public JoinProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JoinProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JoinProcessor, Void> PARSER =
    new ObjectParser<>(JoinProcessor.class.getName(), false, JoinProcessor::new);

  static {
    PARSER.declareString(JoinProcessor::setField, FIELD);
    PARSER.declareString(JoinProcessor::setSeparator, SEPARATOR);
    PARSER.declareString(JoinProcessor::setTargetField, TARGET_FIELD);
  }

}
