
package org.elasticsearch.cluster.nodes_stats;

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

public class ScriptStats  implements XContentable<ScriptStats> {
  
  static final ParseField CACHE_EVICTIONS = new ParseField("cache_evictions");
  private long _cacheEvictions;
  private boolean _cacheEvictions$isSet;
  public long getCacheEvictions() { return this._cacheEvictions; }
  public ScriptStats setCacheEvictions(long val) {
    this._cacheEvictions = val;
    _cacheEvictions$isSet = true;
    return this;
  }

  static final ParseField COMPILATIONS = new ParseField("compilations");
  private long _compilations;
  private boolean _compilations$isSet;
  public long getCompilations() { return this._compilations; }
  public ScriptStats setCompilations(long val) {
    this._compilations = val;
    _compilations$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_cacheEvictions$isSet) {
      builder.field(CACHE_EVICTIONS.getPreferredName(), _cacheEvictions);
    }
    if (_compilations$isSet) {
      builder.field(COMPILATIONS.getPreferredName(), _compilations);
    }
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
