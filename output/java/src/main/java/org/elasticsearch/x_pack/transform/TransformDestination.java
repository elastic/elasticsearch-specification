
package org.elasticsearch.x_pack.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;

public class TransformDestination  implements XContentable<TransformDestination> {
  
  static final ParseField INDEX = new ParseField("index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public TransformDestination setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public TransformDestination setPipeline(String val) { this._pipeline = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformDestination fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformDestination.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformDestination, Void> PARSER =
    new ObjectParser<>(TransformDestination.class.getName(), false, TransformDestination::new);

  static {
    PARSER.declareObject(TransformDestination::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareString(TransformDestination::setPipeline, PIPELINE);
  }

}
