
package org.elasticsearch.analysis.plugins.kuromoji;

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


public class KuromojiReadingFormTokenFilter  implements XContentable<KuromojiReadingFormTokenFilter> {
  
  static final ParseField USE_ROMAJI = new ParseField("use_romaji");
  private Boolean _useRomaji;
  public Boolean getUseRomaji() { return this._useRomaji; }
  public KuromojiReadingFormTokenFilter setUseRomaji(Boolean val) { this._useRomaji = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_useRomaji != null) {
      builder.field(USE_ROMAJI.getPreferredName(), _useRomaji);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KuromojiReadingFormTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KuromojiReadingFormTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KuromojiReadingFormTokenFilter, Void> PARSER =
    new ObjectParser<>(KuromojiReadingFormTokenFilter.class.getName(), false, KuromojiReadingFormTokenFilter::new);

  static {
    PARSER.declareBoolean(KuromojiReadingFormTokenFilter::setUseRomaji, USE_ROMAJI);
  }

}
