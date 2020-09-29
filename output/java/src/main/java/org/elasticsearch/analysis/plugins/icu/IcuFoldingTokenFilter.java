
package org.elasticsearch.analysis.plugins.icu;

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

public class IcuFoldingTokenFilter extends TokenFilterBase implements XContentable<IcuFoldingTokenFilter> {
  
  static final ParseField UNICODE_SET_FILTER = new ParseField("unicode_set_filter");
  private String _unicodeSetFilter;
  public String getUnicodeSetFilter() { return this._unicodeSetFilter; }
  public IcuFoldingTokenFilter setUnicodeSetFilter(String val) { this._unicodeSetFilter = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_unicodeSetFilter != null) {
      builder.field(UNICODE_SET_FILTER.getPreferredName(), _unicodeSetFilter);
    }
  }

  @Override
  public IcuFoldingTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuFoldingTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuFoldingTokenFilter, Void> PARSER =
    new ObjectParser<>(IcuFoldingTokenFilter.class.getName(), false, IcuFoldingTokenFilter::new);

  static {
    PARSER.declareString(IcuFoldingTokenFilter::setUnicodeSetFilter, UNICODE_SET_FILTER);
  }

}
