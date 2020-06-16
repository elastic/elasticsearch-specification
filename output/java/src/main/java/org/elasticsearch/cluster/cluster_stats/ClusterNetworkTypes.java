
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterNetworkTypes  implements XContentable<ClusterNetworkTypes> {
  
  static final ParseField HTTP_TYPES = new ParseField("http_types");
  private NamedContainer<String, Integer> _httpTypes;
  public NamedContainer<String, Integer> getHttpTypes() { return this._httpTypes; }
  public ClusterNetworkTypes setHttpTypes(NamedContainer<String, Integer> val) { this._httpTypes = val; return this; }


  static final ParseField TRANSPORT_TYPES = new ParseField("transport_types");
  private NamedContainer<String, Integer> _transportTypes;
  public NamedContainer<String, Integer> getTransportTypes() { return this._transportTypes; }
  public ClusterNetworkTypes setTransportTypes(NamedContainer<String, Integer> val) { this._transportTypes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_httpTypes != null) {
      builder.field(HTTP_TYPES.getPreferredName());
      _httpTypes.toXContent(builder, params);
    }
    if (_transportTypes != null) {
      builder.field(TRANSPORT_TYPES.getPreferredName());
      _transportTypes.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterNetworkTypes fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterNetworkTypes.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterNetworkTypes, Void> PARSER =
    new ObjectParser<>(ClusterNetworkTypes.class.getName(), false, ClusterNetworkTypes::new);

  static {
    PARSER.declareObject(ClusterNetworkTypes::setHttpTypes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.intValue()), HTTP_TYPES);
    PARSER.declareObject(ClusterNetworkTypes::setTransportTypes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.intValue()), TRANSPORT_TYPES);
  }

}
