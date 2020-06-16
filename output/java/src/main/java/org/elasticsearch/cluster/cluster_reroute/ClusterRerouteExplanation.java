
package org.elasticsearch.cluster.cluster_reroute;

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
import org.elasticsearch.cluster.cluster_reroute.*;

public class ClusterRerouteExplanation  implements XContentable<ClusterRerouteExplanation> {
  
  static final ParseField COMMAND = new ParseField("command");
  private String _command;
  public String getCommand() { return this._command; }
  public ClusterRerouteExplanation setCommand(String val) { this._command = val; return this; }


  static final ParseField DECISIONS = new ParseField("decisions");
  private List<ClusterRerouteDecision> _decisions;
  public List<ClusterRerouteDecision> getDecisions() { return this._decisions; }
  public ClusterRerouteExplanation setDecisions(List<ClusterRerouteDecision> val) { this._decisions = val; return this; }


  static final ParseField PARAMETERS = new ParseField("parameters");
  private ClusterRerouteParameters _parameters;
  public ClusterRerouteParameters getParameters() { return this._parameters; }
  public ClusterRerouteExplanation setParameters(ClusterRerouteParameters val) { this._parameters = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_command != null) {
      builder.field(COMMAND.getPreferredName(), _command);
    }
    if (_decisions != null) {
      builder.array(DECISIONS.getPreferredName(), _decisions);
    }
    if (_parameters != null) {
      builder.field(PARAMETERS.getPreferredName());
      _parameters.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterRerouteExplanation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteExplanation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteExplanation, Void> PARSER =
    new ObjectParser<>(ClusterRerouteExplanation.class.getName(), false, ClusterRerouteExplanation::new);

  static {
    PARSER.declareString(ClusterRerouteExplanation::setCommand, COMMAND);
    PARSER.declareObjectArray(ClusterRerouteExplanation::setDecisions, (p, t) -> ClusterRerouteDecision.PARSER.apply(p, t), DECISIONS);
    PARSER.declareObject(ClusterRerouteExplanation::setParameters, (p, t) -> ClusterRerouteParameters.PARSER.apply(p, t), PARAMETERS);
  }

}
