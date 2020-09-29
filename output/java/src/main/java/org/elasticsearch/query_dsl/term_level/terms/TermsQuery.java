
package org.elasticsearch.query_dsl.term_level.terms;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class TermsQuery extends QueryBase implements XContentable<TermsQuery> {
  
  static final ParseField TERMS = new ParseField("terms");
  private List<String> _terms;
  public List<String> getTerms() { return this._terms; }
  public TermsQuery setTerms(List<String> val) { this._terms = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public TermsQuery setIndex(String val) { this._index = val; return this; }

  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public TermsQuery setId(Id val) { this._id = val; return this; }

  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public TermsQuery setPath(String val) { this._path = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public TermsQuery setRouting(Routing val) { this._routing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_terms != null) {
      builder.array(TERMS.getPreferredName(), _terms);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
  }

  @Override
  public TermsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsQuery, Void> PARSER =
    new ObjectParser<>(TermsQuery.class.getName(), false, TermsQuery::new);

  static {
    PARSER.declareStringArray(TermsQuery::setTerms, TERMS);
    PARSER.declareString(TermsQuery::setIndex, INDEX);
    PARSER.declareObject(TermsQuery::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(TermsQuery::setPath, PATH);
    PARSER.declareObject(TermsQuery::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
  }

}
