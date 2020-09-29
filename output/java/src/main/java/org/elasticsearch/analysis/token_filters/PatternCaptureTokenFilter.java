
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

public class PatternCaptureTokenFilter extends TokenFilterBase implements XContentable<PatternCaptureTokenFilter> {
  
  static final ParseField PATTERNS = new ParseField("patterns");
  private List<String> _patterns;
  public List<String> getPatterns() { return this._patterns; }
  public PatternCaptureTokenFilter setPatterns(List<String> val) { this._patterns = val; return this; }

  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public PatternCaptureTokenFilter setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_patterns != null) {
      builder.array(PATTERNS.getPreferredName(), _patterns);
    }
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
  }

  @Override
  public PatternCaptureTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PatternCaptureTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PatternCaptureTokenFilter, Void> PARSER =
    new ObjectParser<>(PatternCaptureTokenFilter.class.getName(), false, PatternCaptureTokenFilter::new);

  static {
    PARSER.declareStringArray(PatternCaptureTokenFilter::setPatterns, PATTERNS);
    PARSER.declareBoolean(PatternCaptureTokenFilter::setPreserveOriginal, PRESERVE_ORIGINAL);
  }

}
