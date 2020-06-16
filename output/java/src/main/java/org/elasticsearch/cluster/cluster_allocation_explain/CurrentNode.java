
package org.elasticsearch.cluster.cluster_allocation_explain;

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
import org.elasticsearch.internal.*;

public class CurrentNode  implements XContentable<CurrentNode> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CurrentNode setId(String val) { this._id = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CurrentNode setName(String val) { this._name = val; return this; }


  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private NamedContainer<String, String> _attributes;
  public NamedContainer<String, String> getAttributes() { return this._attributes; }
  public CurrentNode setAttributes(NamedContainer<String, String> val) { this._attributes = val; return this; }


  static final ParseField TRANSPORT_ADDRESS = new ParseField("transport_address");
  private String _transportAddress;
  public String getTransportAddress() { return this._transportAddress; }
  public CurrentNode setTransportAddress(String val) { this._transportAddress = val; return this; }


  static final ParseField WEIGHT_RANKING = new ParseField("weight_ranking");
  private Integer _weightRanking;
  public Integer getWeightRanking() { return this._weightRanking; }
  public CurrentNode setWeightRanking(Integer val) { this._weightRanking = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_attributes != null) {
      builder.field(ATTRIBUTES.getPreferredName());
      _attributes.toXContent(builder, params);
    }
    if (_transportAddress != null) {
      builder.field(TRANSPORT_ADDRESS.getPreferredName(), _transportAddress);
    }
    if (_weightRanking != null) {
      builder.field(WEIGHT_RANKING.getPreferredName(), _weightRanking);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CurrentNode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CurrentNode.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CurrentNode, Void> PARSER =
    new ObjectParser<>(CurrentNode.class.getName(), false, CurrentNode::new);

  static {
    PARSER.declareString(CurrentNode::setId, ID);
    PARSER.declareString(CurrentNode::setName, NAME);
    PARSER.declareObject(CurrentNode::setAttributes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), ATTRIBUTES);
    PARSER.declareString(CurrentNode::setTransportAddress, TRANSPORT_ADDRESS);
    PARSER.declareInt(CurrentNode::setWeightRanking, WEIGHT_RANKING);
  }

}
