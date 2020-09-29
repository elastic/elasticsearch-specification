
package org.elasticsearch.modules.scripting.execute_painless_script;

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
import org.elasticsearch.query_dsl.abstractions.container.*;

public class PainlessContextSetup  implements XContentable<PainlessContextSetup> {
  
  static final ParseField DOCUMENT = new ParseField("document");
  private Object _document;
  public Object getDocument() { return this._document; }
  public PainlessContextSetup setDocument(Object val) { this._document = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public PainlessContextSetup setIndex(String val) { this._index = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public PainlessContextSetup setQuery(QueryContainer val) { this._query = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_document != null) {
      builder.field(DOCUMENT.getPreferredName(), _document);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
  }

  @Override
  public PainlessContextSetup fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PainlessContextSetup.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PainlessContextSetup, Void> PARSER =
    new ObjectParser<>(PainlessContextSetup.class.getName(), false, PainlessContextSetup::new);

  static {
    PARSER.declareObject(PainlessContextSetup::setDocument, (p, t) -> p.objectText(), DOCUMENT);
    PARSER.declareString(PainlessContextSetup::setIndex, INDEX);
    PARSER.declareObject(PainlessContextSetup::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
  }

}
