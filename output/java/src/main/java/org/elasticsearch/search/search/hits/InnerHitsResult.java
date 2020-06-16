
package org.elasticsearch.search.search.hits;

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
import org.elasticsearch.search.search.hits.*;

public class InnerHitsResult  implements XContentable<InnerHitsResult> {
  
  static final ParseField HITS = new ParseField("hits");
  private InnerHitsMetadata _hits;
  public InnerHitsMetadata getHits() { return this._hits; }
  public InnerHitsResult setHits(InnerHitsMetadata val) { this._hits = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_hits != null) {
      builder.field(HITS.getPreferredName());
      _hits.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public InnerHitsResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InnerHitsResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InnerHitsResult, Void> PARSER =
    new ObjectParser<>(InnerHitsResult.class.getName(), false, InnerHitsResult::new);

  static {
    PARSER.declareObject(InnerHitsResult::setHits, (p, t) -> InnerHitsMetadata.PARSER.apply(p, t), HITS);
  }

}
