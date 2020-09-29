
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
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.analysis.token_filters.*;

public class ConditionTokenFilter extends TokenFilterBase implements XContentable<ConditionTokenFilter> {
  
  static final ParseField FILTER = new ParseField("filter");
  private List<String> _filter;
  public List<String> getFilter() { return this._filter; }
  public ConditionTokenFilter setFilter(List<String> val) { this._filter = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public ConditionTokenFilter setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public ConditionTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ConditionTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ConditionTokenFilter, Void> PARSER =
    new ObjectParser<>(ConditionTokenFilter.class.getName(), false, ConditionTokenFilter::new);

  static {
    PARSER.declareStringArray(ConditionTokenFilter::setFilter, FILTER);
    PARSER.declareObject(ConditionTokenFilter::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
