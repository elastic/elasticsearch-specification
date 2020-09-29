
package org.elasticsearch.query_dsl.specialized.script_score;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class ScriptScoreQuery extends QueryBase implements XContentable<ScriptScoreQuery> {
  
  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public ScriptScoreQuery setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public ScriptScoreQuery setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public ScriptScoreQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptScoreQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptScoreQuery, Void> PARSER =
    new ObjectParser<>(ScriptScoreQuery.class.getName(), false, ScriptScoreQuery::new);

  static {
    PARSER.declareObject(ScriptScoreQuery::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObject(ScriptScoreQuery::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
