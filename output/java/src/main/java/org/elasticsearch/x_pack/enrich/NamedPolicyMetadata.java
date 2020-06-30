
package org.elasticsearch.x_pack.enrich;

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
import org.elasticsearch.x_pack.enrich.*;

public class NamedPolicyMetadata  implements XContentable<NamedPolicyMetadata> {
  
  static final ParseField CONFIG = new ParseField("config");
  private NamedPolicyConfig _config;
  public NamedPolicyConfig getConfig() { return this._config; }
  public NamedPolicyMetadata setConfig(NamedPolicyConfig val) { this._config = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_config != null) {
      builder.field(CONFIG.getPreferredName());
      _config.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NamedPolicyMetadata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NamedPolicyMetadata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NamedPolicyMetadata, Void> PARSER =
    new ObjectParser<>(NamedPolicyMetadata.class.getName(), false, NamedPolicyMetadata::new);

  static {
    PARSER.declareObject(NamedPolicyMetadata::setConfig, (p, t) -> NamedPolicyConfig.PARSER.apply(p, t), CONFIG);
  }

}
