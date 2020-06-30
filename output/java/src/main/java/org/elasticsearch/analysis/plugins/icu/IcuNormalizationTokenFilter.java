
package org.elasticsearch.analysis.plugins.icu;

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
import org.elasticsearch.analysis.plugins.icu.normalization.*;

public class IcuNormalizationTokenFilter  implements XContentable<IcuNormalizationTokenFilter> {
  
  static final ParseField NAME = new ParseField("name");
  private IcuNormalizationType _name;
  public IcuNormalizationType getName() { return this._name; }
  public IcuNormalizationTokenFilter setName(IcuNormalizationType val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName());
      _name.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IcuNormalizationTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuNormalizationTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuNormalizationTokenFilter, Void> PARSER =
    new ObjectParser<>(IcuNormalizationTokenFilter.class.getName(), false, IcuNormalizationTokenFilter::new);

  static {
    PARSER.declareField(IcuNormalizationTokenFilter::setName, (p, t) -> IcuNormalizationType.PARSER.apply(p), NAME, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
