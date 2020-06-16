
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
import org.elasticsearch.internal.*;

public class FingerprintTokenFilter  implements XContentable<FingerprintTokenFilter> {
  
  static final ParseField MAX_OUTPUT_SIZE = new ParseField("max_output_size");
  private Integer _maxOutputSize;
  public Integer getMaxOutputSize() { return this._maxOutputSize; }
  public FingerprintTokenFilter setMaxOutputSize(Integer val) { this._maxOutputSize = val; return this; }


  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public FingerprintTokenFilter setSeparator(String val) { this._separator = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxOutputSize != null) {
      builder.field(MAX_OUTPUT_SIZE.getPreferredName(), _maxOutputSize);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FingerprintTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FingerprintTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FingerprintTokenFilter, Void> PARSER =
    new ObjectParser<>(FingerprintTokenFilter.class.getName(), false, FingerprintTokenFilter::new);

  static {
    PARSER.declareInt(FingerprintTokenFilter::setMaxOutputSize, MAX_OUTPUT_SIZE);
    PARSER.declareString(FingerprintTokenFilter::setSeparator, SEPARATOR);
  }

}
