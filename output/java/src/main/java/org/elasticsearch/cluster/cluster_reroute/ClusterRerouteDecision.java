
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


public class ClusterRerouteDecision  implements XContentable<ClusterRerouteDecision> {
  
  static final ParseField DECIDER = new ParseField("decider");
  private String _decider;
  public String getDecider() { return this._decider; }
  public ClusterRerouteDecision setDecider(String val) { this._decider = val; return this; }


  static final ParseField DECISION = new ParseField("decision");
  private String _decision;
  public String getDecision() { return this._decision; }
  public ClusterRerouteDecision setDecision(String val) { this._decision = val; return this; }


  static final ParseField EXPLANATION = new ParseField("explanation");
  private String _explanation;
  public String getExplanation() { return this._explanation; }
  public ClusterRerouteDecision setExplanation(String val) { this._explanation = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_decider != null) {
      builder.field(DECIDER.getPreferredName(), _decider);
    }
    if (_decision != null) {
      builder.field(DECISION.getPreferredName(), _decision);
    }
    if (_explanation != null) {
      builder.field(EXPLANATION.getPreferredName(), _explanation);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterRerouteDecision fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteDecision.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteDecision, Void> PARSER =
    new ObjectParser<>(ClusterRerouteDecision.class.getName(), false, ClusterRerouteDecision::new);

  static {
    PARSER.declareString(ClusterRerouteDecision::setDecider, DECIDER);
    PARSER.declareString(ClusterRerouteDecision::setDecision, DECISION);
    PARSER.declareString(ClusterRerouteDecision::setExplanation, EXPLANATION);
  }

}
