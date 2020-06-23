
package org.elasticsearch.analysis.token_filters;

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


public class AsciiFoldingTokenFilter  implements XContentable<AsciiFoldingTokenFilter> {
  
  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public AsciiFoldingTokenFilter setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AsciiFoldingTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsciiFoldingTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsciiFoldingTokenFilter, Void> PARSER =
    new ObjectParser<>(AsciiFoldingTokenFilter.class.getName(), false, AsciiFoldingTokenFilter::new);

  static {
    PARSER.declareBoolean(AsciiFoldingTokenFilter::setPreserveOriginal, PRESERVE_ORIGINAL);
  }

}
