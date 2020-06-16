
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class SslUsage  implements XContentable<SslUsage> {
  
  static final ParseField HTTP = new ParseField("http");
  private SecurityFeatureToggle _http;
  public SecurityFeatureToggle getHttp() { return this._http; }
  public SslUsage setHttp(SecurityFeatureToggle val) { this._http = val; return this; }


  static final ParseField TRANSPORT = new ParseField("transport");
  private SecurityFeatureToggle _transport;
  public SecurityFeatureToggle getTransport() { return this._transport; }
  public SslUsage setTransport(SecurityFeatureToggle val) { this._transport = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_http != null) {
      builder.field(HTTP.getPreferredName());
      _http.toXContent(builder, params);
    }
    if (_transport != null) {
      builder.field(TRANSPORT.getPreferredName());
      _transport.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SslUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SslUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SslUsage, Void> PARSER =
    new ObjectParser<>(SslUsage.class.getName(), false, SslUsage::new);

  static {
    PARSER.declareObject(SslUsage::setHttp, (p, t) -> SecurityFeatureToggle.PARSER.apply(p, t), HTTP);
    PARSER.declareObject(SslUsage::setTransport, (p, t) -> SecurityFeatureToggle.PARSER.apply(p, t), TRANSPORT);
  }

}
