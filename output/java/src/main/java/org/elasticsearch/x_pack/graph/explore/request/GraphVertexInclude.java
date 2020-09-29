
package org.elasticsearch.x_pack.graph.explore.request;

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

public class GraphVertexInclude  implements XContentable<GraphVertexInclude> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public GraphVertexInclude setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField TERM = new ParseField("term");
  private String _term;
  public String getTerm() { return this._term; }
  public GraphVertexInclude setTerm(String val) { this._term = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName(), _term);
    }
  }

  @Override
  public GraphVertexInclude fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphVertexInclude.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphVertexInclude, Void> PARSER =
    new ObjectParser<>(GraphVertexInclude.class.getName(), false, GraphVertexInclude::new);

  static {
    PARSER.declareDouble(GraphVertexInclude::setBoost, BOOST);
    PARSER.declareString(GraphVertexInclude::setTerm, TERM);
  }

}
