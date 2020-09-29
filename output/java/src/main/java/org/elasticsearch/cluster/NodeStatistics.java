
package org.elasticsearch.cluster;

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

public class NodeStatistics  implements XContentable<NodeStatistics> {
  
  static final ParseField FAILED = new ParseField("failed");
  private int _failed;
  private boolean _failed$isSet;
  public int getFailed() { return this._failed; }
  public NodeStatistics setFailed(int val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<ErrorCause> _failures;
  public List<ErrorCause> getFailures() { return this._failures; }
  public NodeStatistics setFailures(List<ErrorCause> val) { this._failures = val; return this; }

  static final ParseField SUCCESSFUL = new ParseField("successful");
  private int _successful;
  private boolean _successful$isSet;
  public int getSuccessful() { return this._successful; }
  public NodeStatistics setSuccessful(int val) {
    this._successful = val;
    _successful$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private int _total;
  private boolean _total$isSet;
  public int getTotal() { return this._total; }
  public NodeStatistics setTotal(int val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_failed$isSet) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_successful$isSet) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public NodeStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeStatistics, Void> PARSER =
    new ObjectParser<>(NodeStatistics.class.getName(), false, NodeStatistics::new);

  static {
    PARSER.declareInt(NodeStatistics::setFailed, FAILED);
    PARSER.declareObjectArray(NodeStatistics::setFailures, (p, t) -> ErrorCause.PARSER.apply(p, t), FAILURES);
    PARSER.declareInt(NodeStatistics::setSuccessful, SUCCESSFUL);
    PARSER.declareInt(NodeStatistics::setTotal, TOTAL);
  }

}
