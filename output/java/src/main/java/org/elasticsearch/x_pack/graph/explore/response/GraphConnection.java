
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

public class GraphConnection  implements XContentable<GraphConnection> {
  
  static final ParseField DOC_COUNT = new ParseField("doc_count");
  private long _docCount;
  private boolean _docCount$isSet;
  public long getDocCount() { return this._docCount; }
  public GraphConnection setDocCount(long val) {
    this._docCount = val;
    _docCount$isSet = true;
    return this;
  }

  static final ParseField SOURCE = new ParseField("source");
  private long _source;
  private boolean _source$isSet;
  public long getSource() { return this._source; }
  public GraphConnection setSource(long val) {
    this._source = val;
    _source$isSet = true;
    return this;
  }

  static final ParseField TARGET = new ParseField("target");
  private long _target;
  private boolean _target$isSet;
  public long getTarget() { return this._target; }
  public GraphConnection setTarget(long val) {
    this._target = val;
    _target$isSet = true;
    return this;
  }

  static final ParseField WEIGHT = new ParseField("weight");
  private double _weight;
  private boolean _weight$isSet;
  public double getWeight() { return this._weight; }
  public GraphConnection setWeight(double val) {
    this._weight = val;
    _weight$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_docCount$isSet) {
      builder.field(DOC_COUNT.getPreferredName(), _docCount);
    }
    if (_source$isSet) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_target$isSet) {
      builder.field(TARGET.getPreferredName(), _target);
    }
    if (_weight$isSet) {
      builder.field(WEIGHT.getPreferredName(), _weight);
    }
  }

  @Override
  public GraphConnection fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphConnection.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphConnection, Void> PARSER =
    new ObjectParser<>(GraphConnection.class.getName(), false, GraphConnection::new);

  static {
    PARSER.declareLong(GraphConnection::setDocCount, DOC_COUNT);
    PARSER.declareLong(GraphConnection::setSource, SOURCE);
    PARSER.declareLong(GraphConnection::setTarget, TARGET);
    PARSER.declareDouble(GraphConnection::setWeight, WEIGHT);
  }

}
