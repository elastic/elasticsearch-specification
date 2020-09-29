
package org.elasticsearch.aggregations.pipeline.bucket_selector;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.scripting.*;

public class BucketSelectorAggregation  implements XContentable<BucketSelectorAggregation> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public BucketSelectorAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public BucketSelectorAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BucketSelectorAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BucketSelectorAggregation, Void> PARSER =
    new ObjectParser<>(BucketSelectorAggregation.class.getName(), false, BucketSelectorAggregation::new);

  static {
    PARSER.declareObject(BucketSelectorAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
