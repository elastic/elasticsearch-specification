
package org.elasticsearch.query_dsl.specialized.more_like_this.like;

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

public class LikeDocument  implements XContentable<LikeDocument> {
  
  static final ParseField DOC = new ParseField("doc");
  private Object _doc;
  public Object getDoc() { return this._doc; }
  public LikeDocument setDoc(Object val) { this._doc = val; return this; }

  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public LikeDocument setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private Id _id;
  public Id getId() { return this._id; }
  public LikeDocument setId(Id val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public LikeDocument setIndex(String val) { this._index = val; return this; }

  static final ParseField PER_FIELD_ANALYZER = new ParseField("per_field_analyzer");
  private NamedContainer<String, String> _perFieldAnalyzer;
  public NamedContainer<String, String> getPerFieldAnalyzer() { return this._perFieldAnalyzer; }
  public LikeDocument setPerFieldAnalyzer(NamedContainer<String, String> val) { this._perFieldAnalyzer = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public LikeDocument setRouting(Routing val) { this._routing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_doc != null) {
      builder.field(DOC.getPreferredName(), _doc);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_perFieldAnalyzer != null) {
      builder.field(PER_FIELD_ANALYZER.getPreferredName());
      _perFieldAnalyzer.toXContent(builder, params);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
  }

  @Override
  public LikeDocument fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LikeDocument.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LikeDocument, Void> PARSER =
    new ObjectParser<>(LikeDocument.class.getName(), false, LikeDocument::new);

  static {
    PARSER.declareObject(LikeDocument::setDoc, (p, t) -> p.objectText(), DOC);
    PARSER.declareStringArray(LikeDocument::setFields, FIELDS);
    PARSER.declareObject(LikeDocument::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(LikeDocument::setIndex, INDEX);
    PARSER.declareObject(LikeDocument::setPerFieldAnalyzer, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PER_FIELD_ANALYZER);
    PARSER.declareObject(LikeDocument::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
  }

}
