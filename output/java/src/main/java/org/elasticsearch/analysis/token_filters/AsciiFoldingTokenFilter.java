
package org.elasticsearch.analysis.token_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.*;

public class AsciiFoldingTokenFilter extends TokenFilterBase implements XContentable<AsciiFoldingTokenFilter> {
  
  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public AsciiFoldingTokenFilter setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
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
