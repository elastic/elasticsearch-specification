
package org.elasticsearch.indices.index_management.split_index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class SplitIndexResponse extends AcknowledgedResponseBase implements XContentable<SplitIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public SplitIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
  }

  @Override
  public SplitIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SplitIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SplitIndexResponse, Void> PARSER =
    new ObjectParser<>(SplitIndexResponse.class.getName(), false, SplitIndexResponse::new);

  static {
    PARSER.declareBoolean(SplitIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
