
package org.elasticsearch.indices.monitoring.indices_shard_stores;

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


public class ShardStoreException  implements XContentable<ShardStoreException> {
  
  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public ShardStoreException setReason(String val) { this._reason = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ShardStoreException setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardStoreException fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardStoreException.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardStoreException, Void> PARSER =
    new ObjectParser<>(ShardStoreException.class.getName(), false, ShardStoreException::new);

  static {
    PARSER.declareString(ShardStoreException::setReason, REASON);
    PARSER.declareString(ShardStoreException::setType, TYPE);
  }

}
