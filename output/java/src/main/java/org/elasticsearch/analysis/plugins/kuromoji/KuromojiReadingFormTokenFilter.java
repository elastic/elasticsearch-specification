
package org.elasticsearch.analysis.plugins.kuromoji;

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

public class KuromojiReadingFormTokenFilter extends TokenFilterBase implements XContentable<KuromojiReadingFormTokenFilter> {
  
  static final ParseField USE_ROMAJI = new ParseField("use_romaji");
  private Boolean _useRomaji;
  public Boolean getUseRomaji() { return this._useRomaji; }
  public KuromojiReadingFormTokenFilter setUseRomaji(Boolean val) { this._useRomaji = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_useRomaji != null) {
      builder.field(USE_ROMAJI.getPreferredName(), _useRomaji);
    }
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
