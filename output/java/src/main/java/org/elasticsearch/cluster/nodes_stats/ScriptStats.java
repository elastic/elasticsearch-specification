
package org.elasticsearch.cluster.nodes_stats;

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

public class ScriptStats  implements XContentable<ScriptStats> {
  
  static final ParseField CACHE_EVICTIONS = new ParseField("cache_evictions");
  private Long _cacheEvictions;
  public Long getCacheEvictions() { return this._cacheEvictions; }
  public ScriptStats setCacheEvictions(Long val) { this._cacheEvictions = val; return this; }


  static final ParseField COMPILATIONS = new ParseField("compilations");
  private Long _compilations;
  public Long getCompilations() { return this._compilations; }
  public ScriptStats setCompilations(Long val) { this._compilations = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cacheEvictions != null) {
      builder.field(CACHE_EVICTIONS.getPreferredName(), _cacheEvictions);
    }
    if (_compilations != null) {
      builder.field(COMPILATIONS.getPreferredName(), _compilations);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScriptStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptStats, Void> PARSER =
    new ObjectParser<>(ScriptStats.class.getName(), false, ScriptStats::new);

  static {
    PARSER.declareLong(ScriptStats::setCacheEvictions, CACHE_EVICTIONS);
    PARSER.declareLong(ScriptStats::setCompilations, COMPILATIONS);
  }

}
