
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

public class PipelineProcessor extends ProcessorBase implements XContentable<PipelineProcessor> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public PipelineProcessor setName(String val) { this._name = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
  }

  @Override
  public PipelineProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PipelineProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PipelineProcessor, Void> PARSER =
    new ObjectParser<>(PipelineProcessor.class.getName(), false, PipelineProcessor::new);

  static {
    PARSER.declareString(PipelineProcessor::setName, NAME);
  }

}
