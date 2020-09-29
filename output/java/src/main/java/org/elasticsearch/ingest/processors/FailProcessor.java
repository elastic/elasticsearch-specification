
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
import org.elasticsearch.ingest.*;

public class FailProcessor extends ProcessorBase implements XContentable<FailProcessor> {
  
  static final ParseField MESSAGE = new ParseField("message");
  private String _message;
  public String getMessage() { return this._message; }
  public FailProcessor setMessage(String val) { this._message = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_message != null) {
      builder.field(MESSAGE.getPreferredName(), _message);
    }
  }

  @Override
  public FailProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FailProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FailProcessor, Void> PARSER =
    new ObjectParser<>(FailProcessor.class.getName(), false, FailProcessor::new);

  static {
    PARSER.declareString(FailProcessor::setMessage, MESSAGE);
  }

}
