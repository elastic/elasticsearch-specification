
package org.elasticsearch.x_pack.machine_learning.datafeed;

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
import org.elasticsearch.x_pack.machine_learning.datafeed.*;

public class DatafeedStats  implements XContentable<DatafeedStats> {
  
  static final ParseField ASSIGNMENT_EXPLANATION = new ParseField("assignment_explanation");
  private String _assignmentExplanation;
  public String getAssignmentExplanation() { return this._assignmentExplanation; }
  public DatafeedStats setAssignmentExplanation(String val) { this._assignmentExplanation = val; return this; }


  static final ParseField DATAFEED_ID = new ParseField("datafeed_id");
  private String _datafeedId;
  public String getDatafeedId() { return this._datafeedId; }
  public DatafeedStats setDatafeedId(String val) { this._datafeedId = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private DiscoveryNode _node;
  public DiscoveryNode getNode() { return this._node; }
  public DatafeedStats setNode(DiscoveryNode val) { this._node = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private DatafeedState _state;
  public DatafeedState getState() { return this._state; }
  public DatafeedStats setState(DatafeedState val) { this._state = val; return this; }


  static final ParseField TIMING_STATS = new ParseField("timing_stats");
  private DatafeedTimingStats _timingStats;
  public DatafeedTimingStats getTimingStats() { return this._timingStats; }
  public DatafeedStats setTimingStats(DatafeedTimingStats val) { this._timingStats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_assignmentExplanation != null) {
      builder.field(ASSIGNMENT_EXPLANATION.getPreferredName(), _assignmentExplanation);
    }
    if (_datafeedId != null) {
      builder.field(DATAFEED_ID.getPreferredName(), _datafeedId);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName());
      _node.toXContent(builder, params);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    if (_timingStats != null) {
      builder.field(TIMING_STATS.getPreferredName());
      _timingStats.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DatafeedStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DatafeedStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DatafeedStats, Void> PARSER =
    new ObjectParser<>(DatafeedStats.class.getName(), false, DatafeedStats::new);

  static {
    PARSER.declareString(DatafeedStats::setAssignmentExplanation, ASSIGNMENT_EXPLANATION);
    PARSER.declareString(DatafeedStats::setDatafeedId, DATAFEED_ID);
    PARSER.declareObject(DatafeedStats::setNode, (p, t) -> DiscoveryNode.PARSER.apply(p, t), NODE);
    PARSER.declareField(DatafeedStats::setState, (p, t) -> DatafeedState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(DatafeedStats::setTimingStats, (p, t) -> DatafeedTimingStats.PARSER.apply(p, t), TIMING_STATS);
  }

}
