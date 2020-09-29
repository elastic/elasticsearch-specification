
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class SlmUsage extends XPackUsage implements XContentable<SlmUsage> {
  
  static final ParseField POLICY_COUNT = new ParseField("policy_count");
  private int _policyCount;
  private boolean _policyCount$isSet;
  public int getPolicyCount() { return this._policyCount; }
  public SlmUsage setPolicyCount(int val) {
    this._policyCount = val;
    _policyCount$isSet = true;
    return this;
  }

  static final ParseField POLICY_STATS = new ParseField("policy_stats");
  private SnapshotLifecycleStats _policyStats;
  public SnapshotLifecycleStats getPolicyStats() { return this._policyStats; }
  public SlmUsage setPolicyStats(SnapshotLifecycleStats val) { this._policyStats = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_policyCount$isSet) {
      builder.field(POLICY_COUNT.getPreferredName(), _policyCount);
    }
    if (_policyStats != null) {
      builder.field(POLICY_STATS.getPreferredName());
      _policyStats.toXContent(builder, params);
    }
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
