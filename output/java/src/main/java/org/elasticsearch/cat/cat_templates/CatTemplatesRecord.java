
package org.elasticsearch.cat.cat_templates;

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

public class CatTemplatesRecord  implements XContentable<CatTemplatesRecord> {
  
  static final ParseField INDEX_PATTERNS = new ParseField("index_patterns");
  private String _indexPatterns;
  public String getIndexPatterns() { return this._indexPatterns; }
  public CatTemplatesRecord setIndexPatterns(String val) { this._indexPatterns = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CatTemplatesRecord setName(String val) { this._name = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private Long _order;
  public Long getOrder() { return this._order; }
  public CatTemplatesRecord setOrder(Long val) { this._order = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public CatTemplatesRecord setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indexPatterns != null) {
      builder.field(INDEX_PATTERNS.getPreferredName(), _indexPatterns);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName(), _order);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatTemplatesRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTemplatesRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTemplatesRecord, Void> PARSER =
    new ObjectParser<>(CatTemplatesRecord.class.getName(), false, CatTemplatesRecord::new);

  static {
    PARSER.declareString(CatTemplatesRecord::setIndexPatterns, INDEX_PATTERNS);
    PARSER.declareString(CatTemplatesRecord::setName, NAME);
    PARSER.declareLong(CatTemplatesRecord::setOrder, ORDER);
    PARSER.declareLong(CatTemplatesRecord::setVersion, VERSION);
  }

}
