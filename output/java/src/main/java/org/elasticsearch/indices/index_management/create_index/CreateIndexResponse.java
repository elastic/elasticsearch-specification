
package org.elasticsearch.indices.index_management.create_index;

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

public class CreateIndexResponse extends AcknowledgedResponseBase implements XContentable<CreateIndexResponse> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CreateIndexResponse setIndex(String val) { this._index = val; return this; }

  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public CreateIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
  }

  @Override
  public CreateIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateIndexResponse, Void> PARSER =
    new ObjectParser<>(CreateIndexResponse.class.getName(), false, CreateIndexResponse::new);

  static {
    PARSER.declareString(CreateIndexResponse::setIndex, INDEX);
    PARSER.declareBoolean(CreateIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
