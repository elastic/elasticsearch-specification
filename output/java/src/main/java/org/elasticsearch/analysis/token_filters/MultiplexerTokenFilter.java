
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

public class MultiplexerTokenFilter extends TokenFilterBase implements XContentable<MultiplexerTokenFilter> {
  
  static final ParseField FILTERS = new ParseField("filters");
  private List<String> _filters;
  public List<String> getFilters() { return this._filters; }
  public MultiplexerTokenFilter setFilters(List<String> val) { this._filters = val; return this; }

  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public MultiplexerTokenFilter setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_filters != null) {
      builder.array(FILTERS.getPreferredName(), _filters);
    }
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
  }

  @Override
  public MultiplexerTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiplexerTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiplexerTokenFilter, Void> PARSER =
    new ObjectParser<>(MultiplexerTokenFilter.class.getName(), false, MultiplexerTokenFilter::new);

  static {
    PARSER.declareStringArray(MultiplexerTokenFilter::setFilters, FILTERS);
    PARSER.declareBoolean(MultiplexerTokenFilter::setPreserveOriginal, PRESERVE_ORIGINAL);
  }

}
