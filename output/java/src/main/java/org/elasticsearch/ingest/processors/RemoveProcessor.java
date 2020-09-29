
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

public class RemoveProcessor extends ProcessorBase implements XContentable<RemoveProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private List<String> _field;
  public List<String> getField() { return this._field; }
  public RemoveProcessor setField(List<String> val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public RemoveProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.array(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
  }

  @Override
  public RemoveProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoveProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoveProcessor, Void> PARSER =
    new ObjectParser<>(RemoveProcessor.class.getName(), false, RemoveProcessor::new);

  static {
    PARSER.declareStringArray(RemoveProcessor::setField, FIELD);
    PARSER.declareBoolean(RemoveProcessor::setIgnoreMissing, IGNORE_MISSING);
  }

}
