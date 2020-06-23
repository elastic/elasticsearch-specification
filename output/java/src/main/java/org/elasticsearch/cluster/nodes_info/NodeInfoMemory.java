
package org.elasticsearch.cluster.nodes_info;

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
import org.elasticsearch.internal.*;

public class NodeInfoMemory  implements XContentable<NodeInfoMemory> {
  
  static final ParseField TOTAL = new ParseField("total");
  private String _total;
  public String getTotal() { return this._total; }
  public NodeInfoMemory setTotal(String val) { this._total = val; return this; }


  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private Long _totalInBytes;
  public Long getTotalInBytes() { return this._totalInBytes; }
  public NodeInfoMemory setTotalInBytes(Long val) { this._totalInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInBytes != null) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeInfoMemory fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoMemory.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoMemory, Void> PARSER =
    new ObjectParser<>(NodeInfoMemory.class.getName(), false, NodeInfoMemory::new);

  static {
    PARSER.declareString(NodeInfoMemory::setTotal, TOTAL);
    PARSER.declareLong(NodeInfoMemory::setTotalInBytes, TOTAL_IN_BYTES);
  }

}
