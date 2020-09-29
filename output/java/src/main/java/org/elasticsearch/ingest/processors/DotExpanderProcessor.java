
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

public class DotExpanderProcessor extends ProcessorBase implements XContentable<DotExpanderProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DotExpanderProcessor setField(String val) { this._field = val; return this; }

  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public DotExpanderProcessor setPath(String val) { this._path = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
  }

  @Override
  public DotExpanderProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DotExpanderProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DotExpanderProcessor, Void> PARSER =
    new ObjectParser<>(DotExpanderProcessor.class.getName(), false, DotExpanderProcessor::new);

  static {
    PARSER.declareString(DotExpanderProcessor::setField, FIELD);
    PARSER.declareString(DotExpanderProcessor::setPath, PATH);
  }

}
