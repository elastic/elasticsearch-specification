
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


public class DiscoveryNode  implements XContentable<DiscoveryNode> {
  
  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private NamedContainer<String, String> _attributes;
  public NamedContainer<String, String> getAttributes() { return this._attributes; }
  public DiscoveryNode setAttributes(NamedContainer<String, String> val) { this._attributes = val; return this; }


  static final ParseField EPHEMERAL_ID = new ParseField("ephemeral_id");
  private String _ephemeralId;
  public String getEphemeralId() { return this._ephemeralId; }
  public DiscoveryNode setEphemeralId(String val) { this._ephemeralId = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public DiscoveryNode setId(String val) { this._id = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public DiscoveryNode setName(String val) { this._name = val; return this; }


  static final ParseField TRANSPORT_ADDRESS = new ParseField("transport_address");
  private String _transportAddress;
  public String getTransportAddress() { return this._transportAddress; }
  public DiscoveryNode setTransportAddress(String val) { this._transportAddress = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_attributes != null) {
      builder.field(ATTRIBUTES.getPreferredName());
      _attributes.toXContent(builder, params);
    }
    if (_ephemeralId != null) {
      builder.field(EPHEMERAL_ID.getPreferredName(), _ephemeralId);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_transportAddress != null) {
      builder.field(TRANSPORT_ADDRESS.getPreferredName(), _transportAddress);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DiscoveryNode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DiscoveryNode.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DiscoveryNode, Void> PARSER =
    new ObjectParser<>(DiscoveryNode.class.getName(), false, DiscoveryNode::new);

  static {
    PARSER.declareObject(DiscoveryNode::setAttributes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), ATTRIBUTES);
    PARSER.declareString(DiscoveryNode::setEphemeralId, EPHEMERAL_ID);
    PARSER.declareString(DiscoveryNode::setId, ID);
    PARSER.declareString(DiscoveryNode::setName, NAME);
    PARSER.declareString(DiscoveryNode::setTransportAddress, TRANSPORT_ADDRESS);
  }

}
