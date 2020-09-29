
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
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.token_filters.*;

public class FingerprintTokenFilter extends TokenFilterBase implements XContentable<FingerprintTokenFilter> {
  
  static final ParseField MAX_OUTPUT_SIZE = new ParseField("max_output_size");
  private int _maxOutputSize;
  private boolean _maxOutputSize$isSet;
  public int getMaxOutputSize() { return this._maxOutputSize; }
  public FingerprintTokenFilter setMaxOutputSize(int val) {
    this._maxOutputSize = val;
    _maxOutputSize$isSet = true;
    return this;
  }

  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public FingerprintTokenFilter setSeparator(String val) { this._separator = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxOutputSize$isSet) {
      builder.field(MAX_OUTPUT_SIZE.getPreferredName(), _maxOutputSize);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
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
