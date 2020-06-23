
package org.elasticsearch.search.search.source_filtering;

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
import org.elasticsearch.common_abstractions.infer.field.*;

public class SourceFilter  implements XContentable<SourceFilter> {
  
  static final ParseField EXCLUDES = new ParseField("excludes");
  private List<Field> _excludes;
  public List<Field> getExcludes() { return this._excludes; }
  public SourceFilter setExcludes(List<Field> val) { this._excludes = val; return this; }


  static final ParseField INCLUDES = new ParseField("includes");
  private List<Field> _includes;
  public List<Field> getIncludes() { return this._includes; }
  public SourceFilter setIncludes(List<Field> val) { this._includes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_excludes != null) {
      builder.array(EXCLUDES.getPreferredName(), _excludes);
    }
    if (_includes != null) {
      builder.array(INCLUDES.getPreferredName(), _includes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SourceFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SourceFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SourceFilter, Void> PARSER =
    new ObjectParser<>(SourceFilter.class.getName(), false, SourceFilter::new);

  static {
    PARSER.declareObjectArray(SourceFilter::setExcludes, (p, t) -> Field.createFrom(p), EXCLUDES);
    PARSER.declareObjectArray(SourceFilter::setIncludes, (p, t) -> Field.createFrom(p), INCLUDES);
  }

}
