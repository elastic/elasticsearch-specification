
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterProcessCpu  implements XContentable<ClusterProcessCpu> {
  
  static final ParseField PERCENT = new ParseField("percent");
  private Integer _percent;
  public Integer getPercent() { return this._percent; }
  public ClusterProcessCpu setPercent(Integer val) { this._percent = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_percent != null) {
      builder.field(PERCENT.getPreferredName(), _percent);
    }
    builder.endObject();
    return builder;
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
