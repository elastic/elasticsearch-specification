
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

public class JsonProcessor extends ProcessorBase implements XContentable<JsonProcessor> {
  
  static final ParseField ADD_TO_ROOT = new ParseField("add_to_root");
  private Boolean _addToRoot;
  public Boolean getAddToRoot() { return this._addToRoot; }
  public JsonProcessor setAddToRoot(Boolean val) { this._addToRoot = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public JsonProcessor setField(String val) { this._field = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public JsonProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_addToRoot != null) {
      builder.field(ADD_TO_ROOT.getPreferredName(), _addToRoot);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public JsonProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JsonProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JsonProcessor, Void> PARSER =
    new ObjectParser<>(JsonProcessor.class.getName(), false, JsonProcessor::new);

  static {
    PARSER.declareBoolean(JsonProcessor::setAddToRoot, ADD_TO_ROOT);
    PARSER.declareString(JsonProcessor::setField, FIELD);
    PARSER.declareString(JsonProcessor::setTargetField, TARGET_FIELD);
  }

}
