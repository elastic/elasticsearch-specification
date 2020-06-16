
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
import org.elasticsearch.common_options.scripting.*;

public class PredicateTokenFilter  implements XContentable<PredicateTokenFilter> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public PredicateTokenFilter setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PredicateTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PredicateTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PredicateTokenFilter, Void> PARSER =
    new ObjectParser<>(PredicateTokenFilter.class.getName(), false, PredicateTokenFilter::new);

  static {
    PARSER.declareObject(PredicateTokenFilter::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
