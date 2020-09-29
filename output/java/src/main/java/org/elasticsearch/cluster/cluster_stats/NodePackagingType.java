
package org.elasticsearch.cluster.cluster_stats;

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

public class NodePackagingType  implements XContentable<NodePackagingType> {
  
  static final ParseField COUNT = new ParseField("count");
  private int _count;
  private boolean _count$isSet;
  public int getCount() { return this._count; }
  public NodePackagingType setCount(int val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField FLAVOR = new ParseField("flavor");
  private String _flavor;
  public String getFlavor() { return this._flavor; }
  public NodePackagingType setFlavor(String val) { this._flavor = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public NodePackagingType setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_flavor != null) {
      builder.field(FLAVOR.getPreferredName(), _flavor);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public NodePackagingType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodePackagingType.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodePackagingType, Void> PARSER =
    new ObjectParser<>(NodePackagingType.class.getName(), false, NodePackagingType::new);

  static {
    PARSER.declareInt(NodePackagingType::setCount, COUNT);
    PARSER.declareString(NodePackagingType::setFlavor, FLAVOR);
    PARSER.declareString(NodePackagingType::setType, TYPE);
  }

}
