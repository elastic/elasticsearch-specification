
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

public class IcuAnalyzer  implements XContentable<IcuAnalyzer> {
  
  static final ParseField METHOD = new ParseField("method");
  private IcuNormalizationType _method;
  public IcuNormalizationType getMethod() { return this._method; }
  public IcuAnalyzer setMethod(IcuNormalizationType val) { this._method = val; return this; }


  static final ParseField MODE = new ParseField("mode");
  private IcuNormalizationMode _mode;
  public IcuNormalizationMode getMode() { return this._mode; }
  public IcuAnalyzer setMode(IcuNormalizationMode val) { this._mode = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_method != null) {
      builder.field(METHOD.getPreferredName());
      _method.toXContent(builder, params);
    }
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IcuAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuAnalyzer, Void> PARSER =
    new ObjectParser<>(IcuAnalyzer.class.getName(), false, IcuAnalyzer::new);

  static {
    PARSER.declareField(IcuAnalyzer::setMethod, (p, t) -> IcuNormalizationType.PARSER.apply(p), METHOD, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(IcuAnalyzer::setMode, (p, t) -> IcuNormalizationMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
