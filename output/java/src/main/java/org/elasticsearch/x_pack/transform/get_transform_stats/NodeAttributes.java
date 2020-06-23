
package org.elasticsearch.x_pack.transform.get_transform_stats;

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


public class NodeAttributes  implements XContentable<NodeAttributes> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public NodeAttributes setId(String val) { this._id = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public NodeAttributes setName(String val) { this._name = val; return this; }


  static final ParseField EPHEMERAL_ID = new ParseField("ephemeral_id");
  private String _ephemeralId;
  public String getEphemeralId() { return this._ephemeralId; }
  public NodeAttributes setEphemeralId(String val) { this._ephemeralId = val; return this; }


  static final ParseField TRANSPORT_ADDRESS = new ParseField("transport_address");
  private String _transportAddress;
  public String getTransportAddress() { return this._transportAddress; }
  public NodeAttributes setTransportAddress(String val) { this._transportAddress = val; return this; }


  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private NamedContainer<String, String> _attributes;
  public NamedContainer<String, String> getAttributes() { return this._attributes; }
  public NodeAttributes setAttributes(NamedContainer<String, String> val) { this._attributes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_ephemeralId != null) {
      builder.field(EPHEMERAL_ID.getPreferredName(), _ephemeralId);
    }
    if (_transportAddress != null) {
      builder.field(TRANSPORT_ADDRESS.getPreferredName(), _transportAddress);
    }
    if (_attributes != null) {
      builder.field(ATTRIBUTES.getPreferredName());
      _attributes.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeAttributes fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeAttributes.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeAttributes, Void> PARSER =
    new ObjectParser<>(NodeAttributes.class.getName(), false, NodeAttributes::new);

  static {
    PARSER.declareString(NodeAttributes::setId, ID);
    PARSER.declareString(NodeAttributes::setName, NAME);
    PARSER.declareString(NodeAttributes::setEphemeralId, EPHEMERAL_ID);
    PARSER.declareString(NodeAttributes::setTransportAddress, TRANSPORT_ADDRESS);
    PARSER.declareObject(NodeAttributes::setAttributes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), ATTRIBUTES);
  }

}
