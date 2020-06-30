
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


public class KuromojiIterationMarkCharFilter  implements XContentable<KuromojiIterationMarkCharFilter> {
  
  static final ParseField NORMALIZE_KANA = new ParseField("normalize_kana");
  private Boolean _normalizeKana;
  public Boolean getNormalizeKana() { return this._normalizeKana; }
  public KuromojiIterationMarkCharFilter setNormalizeKana(Boolean val) { this._normalizeKana = val; return this; }


  static final ParseField NORMALIZE_KANJI = new ParseField("normalize_kanji");
  private Boolean _normalizeKanji;
  public Boolean getNormalizeKanji() { return this._normalizeKanji; }
  public KuromojiIterationMarkCharFilter setNormalizeKanji(Boolean val) { this._normalizeKanji = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_normalizeKana != null) {
      builder.field(NORMALIZE_KANA.getPreferredName(), _normalizeKana);
    }
    if (_normalizeKanji != null) {
      builder.field(NORMALIZE_KANJI.getPreferredName(), _normalizeKanji);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KuromojiIterationMarkCharFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KuromojiIterationMarkCharFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KuromojiIterationMarkCharFilter, Void> PARSER =
    new ObjectParser<>(KuromojiIterationMarkCharFilter.class.getName(), false, KuromojiIterationMarkCharFilter::new);

  static {
    PARSER.declareBoolean(KuromojiIterationMarkCharFilter::setNormalizeKana, NORMALIZE_KANA);
    PARSER.declareBoolean(KuromojiIterationMarkCharFilter::setNormalizeKanji, NORMALIZE_KANJI);
  }

}
