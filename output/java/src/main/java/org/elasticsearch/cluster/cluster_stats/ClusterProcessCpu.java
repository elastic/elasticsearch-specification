
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterProcessCpu  implements XContentable<ClusterProcessCpu> {
  
  static final ParseField PERCENT = new ParseField("percent");
  private int _percent;
  private boolean _percent$isSet;
  public int getPercent() { return this._percent; }
  public ClusterProcessCpu setPercent(int val) {
    this._percent = val;
    _percent$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_percent$isSet) {
      builder.field(PERCENT.getPreferredName(), _percent);
    }
  }

  @Override
  public ClusterProcessCpu fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterProcessCpu.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterProcessCpu, Void> PARSER =
    new ObjectParser<>(ClusterProcessCpu.class.getName(), false, ClusterProcessCpu::new);

  static {
    PARSER.declareInt(ClusterProcessCpu::setPercent, PERCENT);
  }

}
