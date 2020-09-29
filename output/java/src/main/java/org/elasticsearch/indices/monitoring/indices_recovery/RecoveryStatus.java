
package org.elasticsearch.indices.monitoring.indices_recovery;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.indices.monitoring.indices_recovery.*;

public class RecoveryStatus  implements XContentable<RecoveryStatus> {
  
  static final ParseField SHARDS = new ParseField("shards");
  private List<ShardRecovery> _shards;
  public List<ShardRecovery> getShards() { return this._shards; }
  public RecoveryStatus setShards(List<ShardRecovery> val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_shards != null) {
      builder.array(SHARDS.getPreferredName(), _shards);
    }
  }

  @Override
  public RecoveryStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryStatus, Void> PARSER =
    new ObjectParser<>(RecoveryStatus.class.getName(), false, RecoveryStatus::new);

  static {
    PARSER.declareObjectArray(RecoveryStatus::setShards, (p, t) -> ShardRecovery.PARSER.apply(p, t), SHARDS);
  }

}
