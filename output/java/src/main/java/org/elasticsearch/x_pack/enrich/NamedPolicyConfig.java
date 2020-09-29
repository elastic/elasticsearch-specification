
package org.elasticsearch.x_pack.enrich;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.enrich.*;

public class NamedPolicyConfig  implements XContentable<NamedPolicyConfig> {
  
  static final ParseField GEO_MATCH = new ParseField("geo_match");
  private NamedPolicy _geoMatch;
  public NamedPolicy getGeoMatch() { return this._geoMatch; }
  public NamedPolicyConfig setGeoMatch(NamedPolicy val) { this._geoMatch = val; return this; }

  static final ParseField MATCH = new ParseField("match");
  private NamedPolicy _match;
  public NamedPolicy getMatch() { return this._match; }
  public NamedPolicyConfig setMatch(NamedPolicy val) { this._match = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_geoMatch != null) {
      builder.field(GEO_MATCH.getPreferredName());
      _geoMatch.toXContent(builder, params);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
  }

  @Override
  public NamedPolicyConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NamedPolicyConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NamedPolicyConfig, Void> PARSER =
    new ObjectParser<>(NamedPolicyConfig.class.getName(), false, NamedPolicyConfig::new);

  static {
    PARSER.declareObject(NamedPolicyConfig::setGeoMatch, (p, t) -> NamedPolicy.PARSER.apply(p, t), GEO_MATCH);
    PARSER.declareObject(NamedPolicyConfig::setMatch, (p, t) -> NamedPolicy.PARSER.apply(p, t), MATCH);
  }

}
