
package org.elasticsearch.search.search.source_filtering;

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

public class SourceFilter  implements XContentable<SourceFilter> {
  
  static final ParseField EXCLUDES = new ParseField("excludes");
  private Fields _excludes;
  public Fields getExcludes() { return this._excludes; }
  public SourceFilter setExcludes(Fields val) { this._excludes = val; return this; }

  static final ParseField INCLUDES = new ParseField("includes");
  private Fields _includes;
  public Fields getIncludes() { return this._includes; }
  public SourceFilter setIncludes(Fields val) { this._includes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_excludes != null) {
      builder.field(EXCLUDES.getPreferredName());
      _excludes.toXContent(builder, params);
    }
    if (_includes != null) {
      builder.field(INCLUDES.getPreferredName());
      _includes.toXContent(builder, params);
    }
  }

  @Override
  public SourceFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SourceFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SourceFilter, Void> PARSER =
    new ObjectParser<>(SourceFilter.class.getName(), false, SourceFilter::new);

  static {
    PARSER.declareObject(SourceFilter::setExcludes, (p, t) -> Fields.PARSER.apply(p, t), EXCLUDES);
    PARSER.declareObject(SourceFilter::setIncludes, (p, t) -> Fields.PARSER.apply(p, t), INCLUDES);
  }

}
