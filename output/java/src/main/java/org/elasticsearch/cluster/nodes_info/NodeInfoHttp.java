
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
import org.elasticsearch.internal.*;

public class NodeInfoHttp  implements XContentable<NodeInfoHttp> {
  
  static final ParseField BOUND_ADDRESS = new ParseField("bound_address");
  private List<String> _boundAddress;
  public List<String> getBoundAddress() { return this._boundAddress; }
  public NodeInfoHttp setBoundAddress(List<String> val) { this._boundAddress = val; return this; }


  static final ParseField MAX_CONTENT_LENGTH = new ParseField("max_content_length");
  private String _maxContentLength;
  public String getMaxContentLength() { return this._maxContentLength; }
  public NodeInfoHttp setMaxContentLength(String val) { this._maxContentLength = val; return this; }


  static final ParseField MAX_CONTENT_LENGTH_IN_BYTES = new ParseField("max_content_length_in_bytes");
  private Long _maxContentLengthInBytes;
  public Long getMaxContentLengthInBytes() { return this._maxContentLengthInBytes; }
  public NodeInfoHttp setMaxContentLengthInBytes(Long val) { this._maxContentLengthInBytes = val; return this; }


  static final ParseField PUBLISH_ADDRESS = new ParseField("publish_address");
  private String _publishAddress;
  public String getPublishAddress() { return this._publishAddress; }
  public NodeInfoHttp setPublishAddress(String val) { this._publishAddress = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boundAddress != null) {
      builder.array(BOUND_ADDRESS.getPreferredName(), _boundAddress);
    }
    if (_maxContentLength != null) {
      builder.field(MAX_CONTENT_LENGTH.getPreferredName(), _maxContentLength);
    }
    if (_maxContentLengthInBytes != null) {
      builder.field(MAX_CONTENT_LENGTH_IN_BYTES.getPreferredName(), _maxContentLengthInBytes);
    }
    if (_publishAddress != null) {
      builder.field(PUBLISH_ADDRESS.getPreferredName(), _publishAddress);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeInfoHttp fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoHttp.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoHttp, Void> PARSER =
    new ObjectParser<>(NodeInfoHttp.class.getName(), false, NodeInfoHttp::new);

  static {
    PARSER.declareStringArray(NodeInfoHttp::setBoundAddress, BOUND_ADDRESS);
    PARSER.declareString(NodeInfoHttp::setMaxContentLength, MAX_CONTENT_LENGTH);
    PARSER.declareLong(NodeInfoHttp::setMaxContentLengthInBytes, MAX_CONTENT_LENGTH_IN_BYTES);
    PARSER.declareString(NodeInfoHttp::setPublishAddress, PUBLISH_ADDRESS);
  }

}
