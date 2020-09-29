
package org.elasticsearch.query_dsl.specialized.percolate;

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

public class PercolateQuery extends QueryBase implements XContentable<PercolateQuery> {
  
  static final ParseField DOCUMENT = new ParseField("document");
  private Object _document;
  public Object getDocument() { return this._document; }
  public PercolateQuery setDocument(Object val) { this._document = val; return this; }

  static final ParseField DOCUMENTS = new ParseField("documents");
  private List<Object> _documents;
  public List<Object> getDocuments() { return this._documents; }
  public PercolateQuery setDocuments(List<Object> val) { this._documents = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public PercolateQuery setField(String val) { this._field = val; return this; }

  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public PercolateQuery setId(Id val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public PercolateQuery setIndex(String val) { this._index = val; return this; }

  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public PercolateQuery setPreference(String val) { this._preference = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public PercolateQuery setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public PercolateQuery setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_document != null) {
      builder.field(DOCUMENT.getPreferredName(), _document);
    }
    if (_documents != null) {
      builder.array(DOCUMENTS.getPreferredName(), _documents);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
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
    PARSER.declareString(PercolateQuery::setField, FIELD);
    PARSER.declareObject(PercolateQuery::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(PercolateQuery::setIndex, INDEX);
    PARSER.declareString(PercolateQuery::setPreference, PREFERENCE);
    PARSER.declareObject(PercolateQuery::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareLong(PercolateQuery::setVersion, VERSION);
  }

}
