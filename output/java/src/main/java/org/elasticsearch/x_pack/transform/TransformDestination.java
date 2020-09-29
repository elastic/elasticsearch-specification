
package org.elasticsearch.x_pack.transform;

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

public class TransformDestination  implements XContentable<TransformDestination> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public TransformDestination setIndex(String val) { this._index = val; return this; }

  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public TransformDestination setPipeline(String val) { this._pipeline = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
  }

  @Override
  public TransformDestination fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformDestination.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformDestination, Void> PARSER =
    new ObjectParser<>(TransformDestination.class.getName(), false, TransformDestination::new);

  static {
    PARSER.declareString(TransformDestination::setIndex, INDEX);
    PARSER.declareString(TransformDestination::setPipeline, PIPELINE);
  }

}
