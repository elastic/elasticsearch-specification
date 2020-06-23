
package org.elasticsearch.query_dsl.span.not;

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
import org.elasticsearch.query_dsl.span.*;

public class SpanNotQuery  implements XContentable<SpanNotQuery> {
  
  static final ParseField DIST = new ParseField("dist");
  private Integer _dist;
  public Integer getDist() { return this._dist; }
  public SpanNotQuery setDist(Integer val) { this._dist = val; return this; }


  static final ParseField EXCLUDE = new ParseField("exclude");
  private SpanQuery _exclude;
  public SpanQuery getExclude() { return this._exclude; }
  public SpanNotQuery setExclude(SpanQuery val) { this._exclude = val; return this; }


  static final ParseField INCLUDE = new ParseField("include");
  private SpanQuery _include;
  public SpanQuery getInclude() { return this._include; }
  public SpanNotQuery setInclude(SpanQuery val) { this._include = val; return this; }


  static final ParseField POST = new ParseField("post");
  private Integer _post;
  public Integer getPost() { return this._post; }
  public SpanNotQuery setPost(Integer val) { this._post = val; return this; }


  static final ParseField PRE = new ParseField("pre");
  private Integer _pre;
  public Integer getPre() { return this._pre; }
  public SpanNotQuery setPre(Integer val) { this._pre = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dist != null) {
      builder.field(DIST.getPreferredName(), _dist);
    }
    if (_exclude != null) {
      builder.field(EXCLUDE.getPreferredName());
      _exclude.toXContent(builder, params);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_post != null) {
      builder.field(POST.getPreferredName(), _post);
    }
    if (_pre != null) {
      builder.field(PRE.getPreferredName(), _pre);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SpanNotQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanNotQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanNotQuery, Void> PARSER =
    new ObjectParser<>(SpanNotQuery.class.getName(), false, SpanNotQuery::new);

  static {
    PARSER.declareInt(SpanNotQuery::setDist, DIST);
    PARSER.declareObject(SpanNotQuery::setExclude, (p, t) -> SpanQuery.PARSER.apply(p, t), EXCLUDE);
    PARSER.declareObject(SpanNotQuery::setInclude, (p, t) -> SpanQuery.PARSER.apply(p, t), INCLUDE);
    PARSER.declareInt(SpanNotQuery::setPost, POST);
    PARSER.declareInt(SpanNotQuery::setPre, PRE);
  }

}
