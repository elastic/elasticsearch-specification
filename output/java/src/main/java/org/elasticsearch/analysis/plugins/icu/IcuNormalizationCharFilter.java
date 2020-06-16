
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

public class IcuNormalizationCharFilter  implements XContentable<IcuNormalizationCharFilter> {
  
  static final ParseField MODE = new ParseField("mode");
  private IcuNormalizationMode _mode;
  public IcuNormalizationMode getMode() { return this._mode; }
  public IcuNormalizationCharFilter setMode(IcuNormalizationMode val) { this._mode = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private IcuNormalizationType _name;
  public IcuNormalizationType getName() { return this._name; }
  public IcuNormalizationCharFilter setName(IcuNormalizationType val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName());
      _name.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IcuNormalizationCharFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuNormalizationCharFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuNormalizationCharFilter, Void> PARSER =
    new ObjectParser<>(IcuNormalizationCharFilter.class.getName(), false, IcuNormalizationCharFilter::new);

  static {
    PARSER.declareField(IcuNormalizationCharFilter::setMode, (p, t) -> IcuNormalizationMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(IcuNormalizationCharFilter::setName, (p, t) -> IcuNormalizationType.PARSER.apply(p), NAME, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
