
package org.elasticsearch.aggregations.pipeline.bucket_script;

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
import org.elasticsearch.common_options.scripting.*;

public class BucketScriptAggregation  implements XContentable<BucketScriptAggregation> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public BucketScriptAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BucketScriptAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BucketScriptAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BucketScriptAggregation, Void> PARSER =
    new ObjectParser<>(BucketScriptAggregation.class.getName(), false, BucketScriptAggregation::new);

  static {
    PARSER.declareObject(BucketScriptAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
