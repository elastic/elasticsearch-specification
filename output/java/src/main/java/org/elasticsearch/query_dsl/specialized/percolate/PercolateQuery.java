
package org.elasticsearch.query_dsl.specialized.percolate;

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
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.internal.*;

public class PercolateQuery  implements XContentable<PercolateQuery> {
  
  static final ParseField DOCUMENT = new ParseField("document");
  private Object _document;
  public Object getDocument() { return this._document; }
  public PercolateQuery setDocument(Object val) { this._document = val; return this; }


  static final ParseField DOCUMENTS = new ParseField("documents");
  private List<Object> _documents;
  public List<Object> getDocuments() { return this._documents; }
  public PercolateQuery setDocuments(List<Object> val) { this._documents = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public PercolateQuery setField(Field val) { this._field = val; return this; }


  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public PercolateQuery setId(Id val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public PercolateQuery setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public PercolateQuery setPreference(String val) { this._preference = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public PercolateQuery setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public PercolateQuery setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_document != null) {
      builder.field(DOCUMENT.getPreferredName(), _document);
    }
    if (_documents != null) {
      builder.array(DOCUMENTS.getPreferredName(), _documents);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PercolateQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercolateQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercolateQuery, Void> PARSER =
    new ObjectParser<>(PercolateQuery.class.getName(), false, PercolateQuery::new);

  static {
    PARSER.declareObject(PercolateQuery::setDocument, (p, t) -> p.objectText(), DOCUMENT);
    PARSER.declareObjectArray(PercolateQuery::setDocuments, (p, t) -> p.objectText(), DOCUMENTS);
    PARSER.declareObject(PercolateQuery::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(PercolateQuery::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareObject(PercolateQuery::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareString(PercolateQuery::setPreference, PREFERENCE);
    PARSER.declareObject(PercolateQuery::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareLong(PercolateQuery::setVersion, VERSION);
  }

}
