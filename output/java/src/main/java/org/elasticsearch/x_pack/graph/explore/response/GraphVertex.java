
package org.elasticsearch.x_pack.graph.explore.response;

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

public class GraphVertex  implements XContentable<GraphVertex> {
  
  static final ParseField DEPTH = new ParseField("depth");
  private long _depth;
  private boolean _depth$isSet;
  public long getDepth() { return this._depth; }
  public GraphVertex setDepth(long val) {
    this._depth = val;
    _depth$isSet = true;
    return this;
  }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GraphVertex setField(String val) { this._field = val; return this; }

  static final ParseField TERM = new ParseField("term");
  private String _term;
  public String getTerm() { return this._term; }
  public GraphVertex setTerm(String val) { this._term = val; return this; }

  static final ParseField WEIGHT = new ParseField("weight");
  private double _weight;
  private boolean _weight$isSet;
  public double getWeight() { return this._weight; }
  public GraphVertex setWeight(double val) {
    this._weight = val;
    _weight$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_depth$isSet) {
      builder.field(DEPTH.getPreferredName(), _depth);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName(), _term);
    }
    if (_weight$isSet) {
      builder.field(WEIGHT.getPreferredName(), _weight);
    }
  }

  @Override
  public GraphVertex fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphVertex.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphVertex, Void> PARSER =
    new ObjectParser<>(GraphVertex.class.getName(), false, GraphVertex::new);

  static {
    PARSER.declareLong(GraphVertex::setDepth, DEPTH);
    PARSER.declareString(GraphVertex::setField, FIELD);
    PARSER.declareString(GraphVertex::setTerm, TERM);
    PARSER.declareDouble(GraphVertex::setWeight, WEIGHT);
  }

}
