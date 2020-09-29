
package org.elasticsearch.cluster.cluster_reroute;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.cluster_reroute.*;
import org.elasticsearch.common_abstractions.response.*;

public class ClusterRerouteResponse extends ResponseBase<ClusterRerouteResponse> implements XContentable<ClusterRerouteResponse> {
  
  static final ParseField EXPLANATIONS = new ParseField("explanations");
  private List<ClusterRerouteExplanation> _explanations;
  public List<ClusterRerouteExplanation> getExplanations() { return this._explanations; }
  public ClusterRerouteResponse setExplanations(List<ClusterRerouteExplanation> val) { this._explanations = val; return this; }

  static final ParseField STATE = new ParseField("state");
  private List<String> _state;
  public List<String> getState() { return this._state; }
  public ClusterRerouteResponse setState(List<String> val) { this._state = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_explanations != null) {
      builder.array(EXPLANATIONS.getPreferredName(), _explanations);
    }
    if (_state != null) {
      builder.array(STATE.getPreferredName(), _state);
    }
  }

  @Override
  public ClusterRerouteResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteResponse, Void> PARSER =
    new ObjectParser<>(ClusterRerouteResponse.class.getName(), false, ClusterRerouteResponse::new);

  static {
    PARSER.declareObjectArray(ClusterRerouteResponse::setExplanations, (p, t) -> ClusterRerouteExplanation.PARSER.apply(p, t), EXPLANATIONS);
    PARSER.declareStringArray(ClusterRerouteResponse::setState, STATE);
  }

}
