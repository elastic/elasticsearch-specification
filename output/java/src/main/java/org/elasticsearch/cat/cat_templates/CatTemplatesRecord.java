
package org.elasticsearch.cat.cat_templates;

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
import org.elasticsearch.cat.*;

public class CatTemplatesRecord extends ICatRecord implements XContentable<CatTemplatesRecord> {
  
  static final ParseField INDEX_PATTERNS = new ParseField("index_patterns");
  private String _indexPatterns;
  public String getIndexPatterns() { return this._indexPatterns; }
  public CatTemplatesRecord setIndexPatterns(String val) { this._indexPatterns = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CatTemplatesRecord setName(String val) { this._name = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private long _order;
  private boolean _order$isSet;
  public long getOrder() { return this._order; }
  public CatTemplatesRecord setOrder(long val) {
    this._order = val;
    _order$isSet = true;
    return this;
  }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public CatTemplatesRecord setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_indexPatterns != null) {
      builder.field(INDEX_PATTERNS.getPreferredName(), _indexPatterns);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_order$isSet) {
      builder.field(ORDER.getPreferredName(), _order);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
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
