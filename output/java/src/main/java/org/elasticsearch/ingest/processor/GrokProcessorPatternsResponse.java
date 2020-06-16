
package org.elasticsearch.ingest.processor;

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


public class GrokProcessorPatternsResponse  implements XContentable<GrokProcessorPatternsResponse> {
  
  static final ParseField PATTERNS = new ParseField("patterns");
  private NamedContainer<String, String> _patterns;
  public NamedContainer<String, String> getPatterns() { return this._patterns; }
  public GrokProcessorPatternsResponse setPatterns(NamedContainer<String, String> val) { this._patterns = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_patterns != null) {
      builder.field(PATTERNS.getPreferredName());
      _patterns.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GrokProcessorPatternsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GrokProcessorPatternsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GrokProcessorPatternsResponse, Void> PARSER =
    new ObjectParser<>(GrokProcessorPatternsResponse.class.getName(), false, GrokProcessorPatternsResponse::new);

  static {
    PARSER.declareObject(GrokProcessorPatternsResponse::setPatterns, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PATTERNS);
  }

}
