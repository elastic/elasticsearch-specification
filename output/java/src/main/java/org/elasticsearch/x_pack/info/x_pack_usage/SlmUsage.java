
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class SlmUsage  implements XContentable<SlmUsage> {
  
  static final ParseField POLICY_COUNT = new ParseField("policy_count");
  private Integer _policyCount;
  public Integer getPolicyCount() { return this._policyCount; }
  public SlmUsage setPolicyCount(Integer val) { this._policyCount = val; return this; }


  static final ParseField POLICY_STATS = new ParseField("policy_stats");
  private SnapshotLifecycleStats _policyStats;
  public SnapshotLifecycleStats getPolicyStats() { return this._policyStats; }
  public SlmUsage setPolicyStats(SnapshotLifecycleStats val) { this._policyStats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_policyCount != null) {
      builder.field(POLICY_COUNT.getPreferredName(), _policyCount);
    }
    if (_policyStats != null) {
      builder.field(POLICY_STATS.getPreferredName());
      _policyStats.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SlmUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlmUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlmUsage, Void> PARSER =
    new ObjectParser<>(SlmUsage.class.getName(), false, SlmUsage::new);

  static {
    PARSER.declareInt(SlmUsage::setPolicyCount, POLICY_COUNT);
    PARSER.declareObject(SlmUsage::setPolicyStats, (p, t) -> SnapshotLifecycleStats.PARSER.apply(p, t), POLICY_STATS);
  }

}
