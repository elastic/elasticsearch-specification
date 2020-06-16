
package org.elasticsearch.cluster.nodes_info;

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


public class NodeInfoNetworkInterface  implements XContentable<NodeInfoNetworkInterface> {
  
  static final ParseField ADDRESS = new ParseField("address");
  private String _address;
  public String getAddress() { return this._address; }
  public NodeInfoNetworkInterface setAddress(String val) { this._address = val; return this; }


  static final ParseField MAC_ADDRESS = new ParseField("mac_address");
  private String _macAddress;
  public String getMacAddress() { return this._macAddress; }
  public NodeInfoNetworkInterface setMacAddress(String val) { this._macAddress = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public NodeInfoNetworkInterface setName(String val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_address != null) {
      builder.field(ADDRESS.getPreferredName(), _address);
    }
    if (_macAddress != null) {
      builder.field(MAC_ADDRESS.getPreferredName(), _macAddress);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeInfoNetworkInterface fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoNetworkInterface.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoNetworkInterface, Void> PARSER =
    new ObjectParser<>(NodeInfoNetworkInterface.class.getName(), false, NodeInfoNetworkInterface::new);

  static {
    PARSER.declareString(NodeInfoNetworkInterface::setAddress, ADDRESS);
    PARSER.declareString(NodeInfoNetworkInterface::setMacAddress, MAC_ADDRESS);
    PARSER.declareString(NodeInfoNetworkInterface::setName, NAME);
  }

}
