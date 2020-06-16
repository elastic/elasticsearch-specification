
package org.elasticsearch.indices.index_management.create_index;

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


public class CreateIndexResponse  implements XContentable<CreateIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public CreateIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CreateIndexResponse setIndex(String val) { this._index = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CreateIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateIndexResponse, Void> PARSER =
    new ObjectParser<>(CreateIndexResponse.class.getName(), false, CreateIndexResponse::new);

  static {
    PARSER.declareBoolean(CreateIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
    PARSER.declareString(CreateIndexResponse::setIndex, INDEX);
  }

}
